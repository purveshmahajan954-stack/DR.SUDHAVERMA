import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#FBF8F3] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-tl-[10rem] rounded-tr-[10rem] overflow-hidden border border-[#C9A96A]/30 p-2 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" 
                alt="Dr. Sudha Verma" 
                className="w-full h-full object-cover rounded-tl-[9.5rem] rounded-tr-[9.5rem]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-right-10 w-24 h-24 md:w-36 md:h-36 bg-[#3E2C23] rounded-full flex items-center justify-center text-[#C9A96A] p-4 md:p-6 text-center border-4 md:border-8 border-[#FBF8F3] shadow-lg z-10">
              <span className="font-serif italic text-xs md:text-sm leading-tight">Homoeopathy<br/>Specialist</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <SectionHeader kicker="About The Doctor" title="Healing from the Root" align="left" />
            
            <div className="text-[#3E2C23]/80 space-y-6 text-lg md:text-xl leading-relaxed mb-12">
              <p>
                Dr. Sudha Verma brings a patient-first philosophy to homoeopathic healing. With a gentle approach to chronic conditions, she believes in treating the whole person rather than just suppressing isolated symptoms.
              </p>
              <p>
                Every treatment plan is crafted with meticulous attention to your unique constitution, honoring the body's innate intelligence and gently restoring balance for lasting wellness.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-[#C9A96A]/30">
              <div>
                <h4 className="text-3xl md:text-5xl font-serif text-[#C9A96A] mb-2">20+</h4>
                <p className="text-[9px] md:text-xs uppercase tracking-wider text-[#3E2C23] font-semibold leading-tight">Years<br className="md:hidden"/>Experience</p>
              </div>
              <div>
                <h4 className="text-3xl md:text-5xl font-serif text-[#C9A96A] mb-2">5k+</h4>
                <p className="text-[9px] md:text-xs uppercase tracking-wider text-[#3E2C23] font-semibold leading-tight">Patients<br className="md:hidden"/>Treated</p>
              </div>
              <div>
                <h4 className="text-3xl md:text-5xl font-serif text-[#C9A96A] mb-2 flex items-center">4.9<span className="text-xl md:text-3xl ml-0.5 -mt-1">★</span></h4>
                <p className="text-[9px] md:text-xs uppercase tracking-wider text-[#3E2C23] font-semibold leading-tight">Google<br className="md:hidden"/>Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}