import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-12 md:py-24 bg-gradient-to-b from-[#FBF8F3] to-[#8B6F5E]/10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader kicker="Find Us" title="Visit the Clinic" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-7 w-full h-[260px] md:h-[360px] lg:h-[500px] rounded-sm overflow-hidden border-4 md:border-8 border-white shadow-[0_20px_50px_-10px_rgba(47,79,68,0.1)] relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Samartha+Homoeopathic+Pharmacy+Kohinoor+Plaza+Ulhasnagar&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              className="absolute inset-0 grayscale-[20%] contrast-125 sepia-[10%]"
            ></iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-5 bg-white p-6 md:p-10 border border-[#C9A96A]/30 shadow-xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A96A]"></div>
            
            <h3 className="text-3xl font-serif text-[#3E2C23] mb-10">Clinic Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-[#FBF8F3] border border-[#C9A96A]/30 p-3 rounded-full text-[#3E2C23]">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.15em] text-[#C9A96A] uppercase mb-2">Address</h4>
                  <p className="text-[#3E2C23]/90 text-sm md:text-base leading-relaxed">
                    Shop No.4, Samartha Homoeopathic Pharmacy,<br/>
                    Kohinoor Plaza, Railway Station Rd,<br/>
                    Opp. Ambika Mitra Mandal,<br/>
                    Krishna Nagar, Ulhasnagar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 bg-[#FBF8F3] border border-[#C9A96A]/30 p-3 rounded-full text-[#3E2C23]">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.15em] text-[#C9A96A] uppercase mb-2">Contact</h4>
                  <a href="tel:+917276361426" className="text-[#3E2C23]/90 text-sm md:text-base hover:text-[#C9A96A] block mb-1 font-medium">
                    +91 72763 61426
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 bg-[#FBF8F3] border border-[#C9A96A]/30 p-3 rounded-full text-[#3E2C23]">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.15em] text-[#C9A96A] uppercase mb-2">Hours</h4>
                  <p className="text-[#3E2C23]/90 text-sm md:text-base mb-1">Open Daily</p>
                  <p className="text-[#3E2C23]/90 text-sm md:text-base">Closes at 9:30 PM</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/Waph6ihz2eUWLfbE6" 
              target="_blank" 
              rel="noreferrer"
              className="mt-12 block w-full py-4 text-center border border-[#3E2C23] text-[#3E2C23] uppercase tracking-[0.15em] text-xs font-bold hover:bg-[#3E2C23] hover:text-white transition-colors rounded-full"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}