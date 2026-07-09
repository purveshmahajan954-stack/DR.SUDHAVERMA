import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: 'Morning',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Dr. Sudha Verma, I would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Time: ${formData.time}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/917276361426?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FBF8F3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7FA88F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <SectionHeader kicker="Book A Consultation" title="Begin Your Healing Journey" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 md:p-14 border border-[#C9A96A]/30 shadow-[0_20px_60px_-15px_rgba(47,79,68,0.1)] rounded-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-[#2F4F44] font-semibold">Full Name</label>
                <input 
                  id="contact-name"
                  type="text" 
                  required
                  className="w-full bg-[#FBF8F3] border border-[#C9A96A]/30 p-4 outline-none focus:border-[#C9A96A] text-[#2F4F44] transition-colors"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="contact-phone" className="text-xs uppercase tracking-widest text-[#2F4F44] font-semibold">Phone Number</label>
                <input 
                  id="contact-phone"
                  type="tel" 
                  required
                  className="w-full bg-[#FBF8F3] border border-[#C9A96A]/30 p-4 outline-none focus:border-[#C9A96A] text-[#2F4F44] transition-colors"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="contact-time" className="text-xs uppercase tracking-widest text-[#2F4F44] font-semibold">Preferred Time</label>
              <div className="relative">
                <select 
                  id="contact-time"
                  className="w-full bg-[#FBF8F3] border border-[#C9A96A]/30 p-4 outline-none focus:border-[#C9A96A] text-[#2F4F44] transition-colors appearance-none"
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                >
                  <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening">Evening (5:00 PM - 9:30 PM)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#C9A96A]">
                  ▼
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-[#2F4F44] font-semibold">Message (Optional)</label>
              <textarea 
                id="contact-message"
                rows={4}
                className="w-full bg-[#FBF8F3] border border-[#C9A96A]/30 p-4 outline-none focus:border-[#C9A96A] text-[#2F4F44] transition-colors resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                placeholder="Briefly describe your symptoms or reason for visit..."
              ></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-[#2F4F44] text-[#C9A96A] uppercase tracking-widest text-sm font-bold hover:bg-[#1E3330] transition-colors gold-glow mt-4">
              Request Appointment via WhatsApp
            </button>
          </form>

          <div className="mt-12 text-center pt-8 border-t border-[#C9A96A]/20">
            <p className="text-sm text-[#2F4F44]/60 mb-5 font-medium">Prefer to speak directly?</p>
            <a href="tel:+917276361426" className="inline-block py-3 px-10 border border-[#C9A96A] text-[#2F4F44] uppercase tracking-widest text-xs font-bold hover:bg-[#C9A96A] hover:text-[#FBF8F3] transition-colors">
              Call +91 72763 61426
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}