import React from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-accent-50/50 dark:bg-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-charcoal dark:text-white">Let's Design Together</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Ready to transform your space? Fill out the form below or reach out directly. We serve Bangalore, Mumbai, and Hyderabad.
          </p>
        </div>

        <div className="bg-white dark:bg-charcoal rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-5 border border-neutral-100 dark:border-neutral-800">
          
          {/* Contact Info Side */}
          <div className="md:col-span-2 bg-charcoal dark:bg-neutral-800 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-medium mb-8">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent-500 mt-1" />
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:hello@archiaura.com" className="hover:text-accent-400 transition-colors">hello@archiaura.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent-500 mt-1" />
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+919876543210" className="hover:text-accent-400 transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent-500 mt-1" />
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">Studio</p>
                    <p className="leading-relaxed text-neutral-300">
                      12, 100ft Road,<br />
                      Indiranagar, Bangalore<br />
                      Karnataka 560038
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-600 rounded-full opacity-20 blur-3xl pointer-events-none" />
            <div className="absolute top-12 -left-12 w-32 h-32 bg-accent-400 rounded-full opacity-10 blur-2xl pointer-events-none" />
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-charcoal dark:text-neutral-300">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-charcoal dark:text-neutral-300">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-charcoal dark:text-neutral-300">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-charcoal dark:text-neutral-300">Project Type</label>
                <select 
                  id="type"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-charcoal dark:text-neutral-300"
                >
                  <option value="">Select project type...</option>
                  <option value="full-home">Full Home Interior</option>
                  <option value="renovation">Renovation</option>
                  <option value="kitchen">Kitchen & Wardrobes</option>
                  <option value="commercial">Commercial / Office</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal dark:text-neutral-300">Message (Optional)</label>
                <textarea 
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us a bit about your space..."
                ></textarea>
              </div>

              <Button type="submit" fullWidth size="lg">Send Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;