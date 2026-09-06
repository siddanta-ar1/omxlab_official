import React from 'react';
import { FiCheckCircle, FiUsers, FiBookOpen, FiMail } from 'react-icons/fi';

export const CustomerTestimonials = () => {
    return (
        <section className="bg-surface py-24 border-t border-border font-sans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Testimonials */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-12 tracking-tight">
                        What our<br/>customers are saying
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                        {/* Card 1 */}
                        <div className="p-10 border border-border rounded-[3px] transition-all duration-300 bg-surface flex flex-col justify-between h-full group">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-secondary">
                                    <span className="w-8 h-8 bg-secondary rounded-[2px] flex items-center justify-center text-white text-sm">C</span> carwow
                                </h3>
                                <p className="text-secondary mb-8 leading-relaxed text-lg">
                                    "...if you want the conversation forgotten, put it on Slack. If it matters, put it on Discourse."
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-muted font-bold uppercase tracking-wider mb-2">David Santoro, Co-founder</p>
                                <a href="#" className="text-sm font-bold text-secondary group-hover:text-primary-ink flex items-center gap-1 transition-colors">Read their success story <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="p-10 border border-border rounded-[3px] transition-all duration-300 bg-surface flex flex-col justify-between h-full group">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-secondary">Local Guides</h3>
                                <p className="text-secondary mb-8 leading-relaxed text-lg">
                                    "It was a pleasure to work with the team. We knew that we were being guided by experts who deeply know what communities need in order to thrive."
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-muted font-bold uppercase tracking-wider mb-2">Flavia Siqueira, Project Manager</p>
                                <a href="#" className="text-sm font-bold text-secondary group-hover:text-primary-ink flex items-center gap-1 transition-colors">Watch the webinar <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="p-10 border border-border rounded-[3px] transition-all duration-300 bg-surface flex flex-col justify-between h-full group">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-secondary">
                                    <span className="w-6 h-6 bg-green-500 rounded-sm"></span> Katalon
                                </h3>
                                <p className="text-secondary mb-8 leading-relaxed text-lg">
                                    "Being hosted... and having all the current features is a tremendous help to the team and company. There is no one that offers this level of customization."
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-muted font-bold uppercase tracking-wider mb-2">Sara Leslie, Sr. Director</p>
                                <a href="#" className="text-sm font-bold text-secondary group-hover:text-primary-ink flex items-center gap-1 transition-colors">Read their success story <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#" className="text-sm font-bold text-muted hover:text-secondary hover:underline transition-colors">
                        See what others love about Discourse &rarr;
                    </a>
                </div>

                {/* Support Section */}
                <div className="text-center mt-32 mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-16 tracking-tight">
                        Support that<br/>understands your stack
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
                        <div className="p-10 bg-body rounded-[4px] border border-border transition-shadow">
                            <div className="w-12 h-12 bg-accent rounded-[3px] flex items-center justify-center mb-8 text-[#4F46E5]">
                                <FiCheckCircle size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-secondary mb-4">Expert support team</h4>
                            <p className="text-muted text-base leading-relaxed mb-8">Our advocates aren't reading from scripts. They're engineers who know Discourse inside out and can help you architect the right solution.</p>
                            <a href="#" className="text-sm font-bold text-secondary hover:text-primary-ink flex items-center gap-1 transition-colors">Meet our team &rarr;</a>
                        </div>
                        
                        <div className="p-10 bg-accent/60 rounded-[4px] border border-border transition-shadow">
                            <div className="w-12 h-12 bg-accent rounded-[3px] flex items-center justify-center mb-8 text-[#2563EB]">
                                <FiUsers size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-secondary mb-4">Community forum</h4>
                            <p className="text-muted text-base leading-relaxed mb-8">Join a community of builders, moderators, and enthusiasts who love helping others get the most out of Discourse — from setup tips to advanced customizations.</p>
                            <a href="#" className="text-sm font-bold text-secondary hover:text-primary-ink flex items-center gap-1 transition-colors">Join the Discourse community &rarr;</a>
                        </div>
                        
                        <div className="p-10 bg-accent/70 rounded-[4px] border border-border transition-shadow">
                            <div className="w-12 h-12 bg-accent rounded-[3px] flex items-center justify-center mb-8 text-primary-ink">
                                <FiBookOpen size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-secondary mb-4">Resource center</h4>
                            <p className="text-muted text-base leading-relaxed mb-8">Explore expert guides, community insights, and helpful tools designed to make running your Discourse community easier and more effective.</p>
                            <a href="#" className="text-sm font-bold text-secondary hover:text-primary-ink flex items-center gap-1 transition-colors">Visit the Resource Center &rarr;</a>
                        </div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto text-center italic text-2xl md:text-3xl text-secondary font-medium leading-tight mb-10">
                        "It's been such a privilege to work with you guys over the years. I can't stress how exceptional it was to have such friendly and knowledgeable suppliers to work with. Huge props! Not only did you make this project possible, you made it thoroughly enjoyable!"
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" alt="Tristan Robinson" className="w-14 h-14 rounded-full object-cover shadow-sm" />
                        <div className="text-left">
                            <h5 className="font-bold text-secondary text-base">Tristan Robinson</h5>
                            <p className="text-sm text-muted">Project Manager at Helia</p>
                        </div>
                    </div>
                </div>
                
                {/* Newsletter Block */}
                <div className="mt-32 pt-16 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border">
                    <div className="pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-border pb-12 md:pb-0">
                        <h4 className="font-bold text-xl text-secondary mb-3 flex items-center gap-3">
                            <FiMail className="text-muted w-6 h-6" />
                            Join our newsletter
                        </h4>
                        <p className="text-muted text-base mb-6">Get community tips and product updates delivered to your inbox.</p>
                        <form className="flex flex-wrap gap-3">
                            <input 
                                type="email" 
                                placeholder="Your email*" 
                                className="flex-1 min-w-0 basis-48 px-5 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow" 
                            />
                            <button 
                                type="submit" 
                                className="bg-primary text-white px-6 py-3 rounded-[3px] font-medium hover:bg-primary-hover transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-muted mt-4">Don't worry, we won't share your email and you can unsubscribe anytime.</p>
                    </div>
                    
                    <div className="pl-0 md:pl-8 flex flex-col justify-center">
                        <div className="w-12 h-12 bg-accent rounded-[3px] flex items-center justify-center text-primary-ink mb-6">
                            <FiBookOpen size={20} />
                        </div>
                        <h4 className="font-bold text-xl text-secondary mb-3">Read our blog</h4>
                        <p className="text-muted text-base mb-6 max-w-md">Long-form deep dives, case studies, and how-tos from the Discourse team.</p>
                        <div>
                            <a href="#" className="text-sm font-bold text-primary-ink hover:text-secondary transition-colors flex items-center gap-1">Visit the blog <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
