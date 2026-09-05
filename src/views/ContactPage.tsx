'use client';

import { useState } from 'react';
import {
    CONTACT_EMAIL,
    SERVICE_OPTIONS,
    initialValues,
    validate,
    submitContactForm,
} from '@/lib/contact';
import type { ContactValues, ContactErrors } from '@/lib/contact';
import { LuPhone, LuMail, LuMapPin, LuMessageSquare, LuSend, LuHeadphones } from 'react-icons/lu';

const floatingIcons = [
    { id: 1, Icon: LuPhone, color: 'text-[#22D3EE]', pos: 'top-[15%] left-[10%]', size: 'text-5xl', animation: 'animate-float' },
    { id: 2, Icon: LuMail, color: 'text-[#38BDF8]', pos: 'top-[35%] left-[25%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 3, Icon: LuMessageSquare, color: 'text-[#818CF8]', pos: 'bottom-[30%] left-[12%]', size: 'text-5xl', animation: 'animate-float-slow' },
    { id: 4, Icon: LuMapPin, color: 'text-[#A5B4FC]', pos: 'top-[20%] right-[15%]', size: 'text-4xl', animation: 'animate-float-delayed' },
    { id: 5, Icon: LuHeadphones, color: 'text-[#6366F1]', pos: 'top-[45%] right-[28%]', size: 'text-4xl', animation: 'animate-float' },
    { id: 6, Icon: LuSend, color: 'text-[#818CF8]', pos: 'bottom-[25%] right-[10%]', size: 'text-3xl', animation: 'animate-float-slow' },
];

const mobileFloatingIcons = [
    { id: 1, Icon: LuPhone, color: 'text-[#22D3EE]', pos: 'top-[12%] left-[4%]', size: 'text-3xl', animation: 'animate-float-fast' },
    { id: 2, Icon: LuMapPin, color: 'text-[#A5B4FC]', pos: 'top-[30%] right-[4%]', size: 'text-3xl', animation: 'animate-float-fast-delayed' },
    { id: 3, Icon: LuMessageSquare, color: 'text-[#818CF8]', pos: 'bottom-[35%] left-[6%]', size: 'text-4xl', animation: 'animate-float-fast-slow' },
    { id: 4, Icon: LuHeadphones, color: 'text-[#6366F1]', pos: 'bottom-[22%] right-[6%]', size: 'text-3xl', animation: 'animate-float-fast' },
];

// Defined at module scope: a component created inside render is a new type on
// every keystroke, which would remount the field and drop focus.
const FieldError = ({ id, message }: { id: string; message?: string }) =>
    message ? (
        <p id={id} className="text-xs text-red-500 mt-1">
            {message}
        </p>
    ) : null;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactPage = () => {
    const [values, setValues] = useState<ContactValues>(initialValues);
    const [errors, setErrors] = useState<ContactErrors>({});
    const [status, setStatus] = useState<FormStatus>('idle'); // idle | submitting | success | error
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setValues((previous) => ({ ...previous, [name]: value }));

        // Clear a field's error as soon as the visitor starts correcting it.
        setErrors((previous) => {
            if (!previous[name as keyof ContactValues]) return previous;
            const next = { ...previous };
            delete next[name as keyof ContactValues];
            return next;
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Honeypot: a real visitor never sees this field, so a value means a bot.
        // Report success rather than an error so the bot doesn't learn to adapt.
        if (values.website) {
            setStatus('success');
            setStatusMessage('Thanks — your message has been sent.');
            return;
        }

        const nextErrors = validate(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus('error');
            setStatusMessage('Please correct the highlighted fields and try again.');
            return;
        }

        setStatus('submitting');
        setStatusMessage('');

        try {
            const { mode } = await submitContactForm(values);
            setStatus('success');
            setStatusMessage(
                mode === 'mail-client'
                    ? 'We’ve opened your email client with the message ready to send. If nothing happened, email us directly.'
                    : 'Thanks — your message is on its way. We typically reply within 1–2 business days.'
            );
            setValues(initialValues);
        } catch (error) {
            setStatus('error');
            setStatusMessage(
                error instanceof Error
                    ? error.message
                    : 'Something went wrong. Please try again.'
            );
        }
    };

    const isSubmitting = status === 'submitting';

    // Shared field styling, with an error variant.
    const fieldClass = (name: keyof ContactValues) =>
        `w-full text-sm bg-[var(--color-body)] border rounded-lg px-4 py-3 text-[var(--color-secondary)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-1 transition disabled:opacity-60 disabled:cursor-not-allowed ${errors[name]
            ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
            : 'border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]'
        }`;

    return (
        <div className="bg-[var(--color-body)] text-[var(--color-secondary)] min-h-screen">

            <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]">

                {/* Full-width Background Effects */}
                <div className="pointer-events-none absolute top-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-full overflow-hidden">
                    {/* Soft background gradient */}
                    <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />

                    {/* Large glow */}
                    <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />

                    {/* Secondary glow */}
                    <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

                    {/* Dot Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "radial-gradient(var(--color-secondary) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />
                </div>

                {/* Floating Application Icons Layer (Desktop) */}
                <div className="absolute inset-0 max-w-[1400px] mx-auto hidden md:block">
                    {floatingIcons.map((item) => (
                        <div 
                            key={item.id} 
                            className={`absolute ${item.pos} ${item.animation} w-16 h-16 bg-surface/70 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl flex items-center justify-center opacity-80 transition-all duration-300 z-10 pointer-events-auto`}
                        >
                            <item.Icon className={`${item.size} ${item.color}`} />
                        </div>
                    ))}
                </div>

                {/* Floating Application Icons Layer (Mobile) */}
                <div className="absolute inset-0 max-w-full mx-auto block md:hidden overflow-hidden">
                    {mobileFloatingIcons.map((item) => (
                        <div 
                            key={`mobile-${item.id}`} 
                            className={`absolute ${item.pos} ${item.animation} w-12 h-12 bg-surface/80 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.45)] rounded-xl flex items-center justify-center opacity-85 transition-all duration-300 z-10 pointer-events-auto`}
                        >
                            <item.Icon className={`${item.size} ${item.color}`} />
                        </div>
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-ink)] text-xs font-semibold mb-6 border border-[var(--color-border)]">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                        Get In Touch
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-secondary)] leading-tight max-w-4xl mx-auto">
                        Let's Build
                        <br />
                        <span className="text-[var(--color-primary-ink)]">
                            Something Great
                        </span>
                    </h1>

                    <p className="mt-6 text-[var(--color-muted)] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                        Have a project in mind, need expert consultation, or want to
                        explore new possibilities? Our team is ready to help turn your
                        ideas into reliable, scalable digital solutions.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

                    {/* LEFT SIDE: CONTACT INFO */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="text-xs font-semibold text-[var(--color-primary-ink)] block mb-2">
                                Contact Directory
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] tracking-tight">
                                Direct Channels
                            </h2>
                            <p className="text-[var(--color-muted)] text-sm mt-2">
                                Reach out directly via phone, email, or visit our regional offices.
                            </p>
                        </div>

                        {/* Contact Information Cards */}
                        <div className="space-y-4">
                            {/* Email */}
                            <a
                                href="mailto:contact@omxlab.tech"
                                className="group flex items-start gap-4 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm"
                            >
                                <div className="p-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary-ink)] border border-[var(--color-border)] group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium text-[var(--color-muted)] block">Email Us</span>
                                    <span className="text-[var(--color-secondary)] text-sm font-semibold group-hover:text-[var(--color-primary-ink)] transition-colors">
                                        contact@omxlab.tech
                                    </span>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+9779860590678"
                                className="group flex items-start gap-4 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm"
                            >
                                <div className="p-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary-ink)] border border-[var(--color-border)] group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium text-[var(--color-muted)] block">Call Us</span>
                                    <span className="text-[var(--color-secondary)] text-sm font-semibold group-hover:text-[var(--color-primary-ink)] transition-colors">
                                        +977 98XXXXXXX
                                    </span>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm">
                                <div className="p-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary-ink)] border border-[var(--color-border)]">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs font-medium text-[var(--color-muted)] block">Locations</span>
                                    <p className="text-[var(--color-secondary)] text-sm font-medium leading-relaxed mt-0.5">
                                        Chitwan
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social & Registration Cards */}
                        <div className="pt-2 space-y-4">
                            {/* Follow Us */}
                            <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm">
                                <span className="text-xs font-medium text-[var(--color-muted)] block mb-3">
                                    Social Connection
                                </span>
                                <a
                                    href="https://www.instagram.com/omxlabofficial/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-border)] text-[var(--color-secondary)] hover:text-[var(--color-primary-ink)] border border-[var(--color-border)] text-sm font-medium transition"
                                >
                                    <svg className="w-5 h-5 text-[var(--color-primary-ink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <span>@omxlabofficial</span>
                                </a>
                            </div>

                            {/* Registration Badge */}
                            <div className="p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm relative overflow-hidden">
                                <div className="flex items-center gap-2 text-xs text-[var(--color-primary-ink)] font-semibold mb-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span>Official Registration</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-xs mt-3 pt-3 border-t border-[var(--color-border)]">
                                    <div>
                                        <span className="text-[var(--color-muted)] block">Regd. No.</span>
                                        <span className="text-[var(--color-secondary)] font-semibold">- / -</span>
                                    </div>
                                    <div>
                                        <span className="text-[var(--color-muted)] block">PAN</span>
                                        <span className="text-[var(--color-secondary)] font-semibold">- / -</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: CONTACT FORM */}
                    <div className="lg:col-span-7 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-10 shadow-lg relative">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[var(--color-secondary)] tracking-tight">
                                Send Us a Message
                            </h3>
                            <p className="text-[var(--color-muted)] text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[var(--color-primary-ink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>We typically reply within 1–2 business days.</span>
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                            {/* Full Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="fullName" className="text-xs font-medium text-[var(--color-muted)] block">
                                        Full Name <span className="text-[var(--color-primary-ink)]">*</span>
                                    </label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        aria-invalid={Boolean(errors.fullName)}
                                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                                        placeholder="Hari Shrestha"
                                        className={fieldClass('fullName')}
                                    />
                                    <FieldError id="fullName-error" message={errors.fullName} />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-medium text-[var(--color-muted)] block">
                                        Email Address <span className="text-[var(--color-primary-ink)]">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={errors.email ? 'email-error' : undefined}
                                        placeholder="you@example.com"
                                        className={fieldClass('email')}
                                    />
                                    <FieldError id="email-error" message={errors.email} />
                                </div>
                            </div>

                            {/* Company & Service */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="company" className="text-xs font-medium text-[var(--color-muted)] block">
                                        Company <span className="text-[var(--color-muted)]">(optional)</span>
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        name="company"
                                        value={values.company}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        placeholder="Acme Pvt. Ltd."
                                        className={fieldClass('company')}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="service" className="text-xs font-medium text-[var(--color-muted)] block">
                                        What do you need? <span className="text-[var(--color-muted)]">(optional)</span>
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={values.service}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className={`${fieldClass('service')} cursor-pointer`}
                                    >
                                        <option value="">Select a service…</option>
                                        {SERVICE_OPTIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-medium text-[var(--color-muted)] block">
                                    Message <span className="text-[var(--color-primary-ink)]">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={values.message}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    placeholder="Tell us more about your project, timeline, or specific requirements..."
                                    className={`${fieldClass('message')} p-4 resize-none`}
                                ></textarea>
                                <FieldError id="message-error" message={errors.message} />
                            </div>

                            {/* Honeypot — hidden from real visitors, catches naive bots */}
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="website">Website</label>
                                <input
                                    id="website"
                                    type="text"
                                    name="website"
                                    value={values.website}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Status Message */}
                            {statusMessage && (
                                <div
                                    role={status === 'error' ? 'alert' : 'status'}
                                    aria-live="polite"
                                    className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${status === 'success'
                                        ? 'border-[var(--color-primary)]/30 bg-[var(--color-accent)] text-[var(--color-secondary)]'
                                        : 'border-red-300 bg-red-50 text-red-700'
                                        }`}
                                >
                                    <span className="font-bold leading-relaxed">
                                        {status === 'success' ? '✓' : '!'}
                                    </span>
                                    <span className="leading-relaxed">{statusMessage}</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-secondary font-semibold text-sm px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                            </svg>
                                            <span>Sending…</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                <span className="text-xs text-[var(--color-muted)]">
                                    Or email us at{' '}
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="text-[var(--color-primary-ink)] font-medium hover:underline"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div >
            </section >
        </div >
    );
};