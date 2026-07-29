// Contact form validation and submission.
//
// Submission targets whatever endpoint is configured in
// NEXT_PUBLIC_CONTACT_ENDPOINT (a Formspree / Web3Forms / custom handler URL
// that accepts a JSON POST).
// When no endpoint is configured the form falls back to opening the visitor's
// mail client with the message prefilled, so it still does something useful
// on a fresh checkout instead of silently discarding the submission.

export const CONTACT_EMAIL = 'contact@omxlab.tech';

export const SERVICE_OPTIONS = [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'Cloud & DevOps',
    'AI & Agentic Automation',
    'QA & Test Automation',
    'Something else',
];

export const initialValues = {
    fullName: '',
    email: '',
    company: '',
    service: '',
    message: '',
    // Honeypot: hidden from real users, so anything filling it is a bot.
    website: '',
};

export type ContactValues = typeof initialValues;
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

// Deliberately permissive — the goal is catching typos, not enforcing RFC 5322.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const validate = (values: ContactValues): ContactErrors => {
    const errors: ContactErrors = {};

    const fullName = values.fullName.trim();
    if (!fullName) {
        errors.fullName = 'Please tell us your name.';
    } else if (fullName.length < 2) {
        errors.fullName = 'That name looks too short.';
    }

    const email = values.email.trim();
    if (!email) {
        errors.email = 'We need an email address to reply to.';
    } else if (!EMAIL_PATTERN.test(email)) {
        errors.email = 'That does not look like a valid email address.';
    }

    const message = values.message.trim();
    if (!message) {
        errors.message = 'Please tell us a little about what you need.';
    } else if (message.length < 20) {
        errors.message = 'A little more detail helps us route your enquiry.';
    } else if (message.length > 5000) {
        errors.message = 'Please keep this under 5000 characters.';
    }

    return errors;
};

const buildMailto = (values: ContactValues) => {
    const subject = values.service
        ? `Enquiry: ${values.service}`
        : 'Website enquiry';

    const body = [
        `Name: ${values.fullName.trim()}`,
        `Email: ${values.email.trim()}`,
        values.company.trim() ? `Company: ${values.company.trim()}` : null,
        values.service ? `Service: ${values.service}` : null,
        '',
        values.message.trim(),
    ]
        .filter(Boolean)
        .join('\n');

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Submits the form. Resolves to { mode: 'sent' | 'mail-client' } on success
 * and throws with a user-presentable message on failure.
 */
export const submitContactForm = async (values: ContactValues) => {
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    if (!endpoint) {
        window.location.href = buildMailto(values);
        return { mode: 'mail-client' };
    }

    let response;
    try {
        response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name: values.fullName.trim(),
                email: values.email.trim(),
                company: values.company.trim(),
                service: values.service,
                message: values.message.trim(),
            }),
        });
    } catch {
        // Network failure, DNS, offline, blocked by an extension.
        throw new Error(
            `We couldn't reach the server. Please check your connection or email us directly at ${CONTACT_EMAIL}.`
        );
    }

    if (!response.ok) {
        throw new Error(
            `Something went wrong on our end (error ${response.status}). Please try again, or email us at ${CONTACT_EMAIL}.`
        );
    }

    return { mode: 'sent' };
};
