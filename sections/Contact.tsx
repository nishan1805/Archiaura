import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Prepare template parameters matching your email template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.type || 'Not specified',
        message: formData.message || 'No additional message provided',
        page_url: window.location.href,
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        date: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'long'
        })
      };

      // Send email to yourself (admin notification)
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // Send auto-reply to the user if auto-reply template is configured
      if (autoReplyTemplateId) {
        const autoReplyParams = {
          to_name: formData.name,
          to_email: formData.email,
          from_email : formData.email,
          phone : formData.phone,
          project_type: formData.type || 'Not specified',
          message: formData.message || 'No additional message provided',
        };

        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          autoReplyParams,
          publicKey
        );
      }

      if (response.status === 200) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          type: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again or contact us directly at archiandaura@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-accent-50/50 dark:bg-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-charcoal dark:text-white">Let's Design Together</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto font-light">
            Ready to transform your space? Reach out to our Raipur studio or drop us a message below.
          </p>
        </div>

        <div className="bg-white dark:bg-charcoal rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-5 border border-neutral-100 dark:border-neutral-800">
          
          {/* Contact Info Side */}
          <div className="md:col-span-2 bg-charcoal dark:bg-neutral-800 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-10">Studio Info</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1 font-bold">Email</p>
                    <a href="mailto:archiandaura@gmail.com" className="text-sm hover:text-accent-400 transition-colors">archiandaura@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1 font-bold">Phone</p>
                    <a href="tel:6262062121" className="text-sm hover:text-accent-400 transition-colors">62620 62121</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1 font-bold">Address</p>
                    <p className="text-sm leading-relaxed text-neutral-300">
                      Mahaveer Nagar, Golcha Park,<br />
                      Shivam Building, 3rd Floor, Room 308,<br />
                      Raipur, Chhattisgarh – 492001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Gold Circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-500 rounded-full opacity-10 blur-3xl pointer-events-none" />
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 p-10 relative">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
              </motion.div>
            )}
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Phone</label>
                      <input 
                        required
                        type="tel" 
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="10-digit number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Project Type</label>
                    <select 
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-sm text-charcoal dark:text-neutral-300"
                    >
                      <option value="">Select project type...</option>
                      <option value="interior">Interior Design Only</option>
                      <option value="consultancy">Designing + Consultancy</option>
                      <option value="turnkey">Turnkey Project</option>
                      <option value="commercial">Commercial Space</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Message (Optional)</label>
                    <textarea 
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                      placeholder="Tell us about your space..."
                    ></textarea>
                  </div>

                  <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-10"
                >
                  <div className="w-20 h-20 bg-accent-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-accent-500 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-charcoal dark:text-white mb-4">Request Sent!</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-xs">
                    Thank you for reaching out. Our team will contact you shortly at the phone number provided.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>Send another message</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;