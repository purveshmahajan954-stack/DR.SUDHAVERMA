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
            <div className="absolute -bottom-6 -right-6 lg:-right-10 w-32 h-32 md:w-40 md:h-40 bg-[#2F4F44] rounded-full flex items-center justify-center text-[#C9A96A] p-6 text-center border-8 border-[#FBF8F3] shadow-lg">
              <span className="font-serif italic text-sm md:text-base leading-tight">Rooted in<br/>Nature</span>
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
            
            <div className="text-[#2F4F44]/80 space-y-6 text-lg md:text-xl leading-relaxed mb-12">
              <p>
                Dr. Sudha Verma brings a patient-first philosophy to homoeopathic healing. With a gentle approach to chronic conditions, she believes in treating the whole person rather than just suppressing isolated symptoms.
              </p>
              <p>
                Every treatment plan is crafted with meticulous attention to your unique constitution, honoring the body's innate intelligence and gently restoring balance for lasting wellness.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-[#C9A96A]/30">
              <div>
                <h4 className="text-4xl md:text-5xl font-serif text-[#C9A96A] mb-2">20+</h4>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#2F4F44] font-semibold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-serif text-[#C9A96A] mb-2">5k+</h4>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#2F4F44] font-semibold">Patients Treated</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-serif text-[#C9A96A] mb-2 flex items-center">4.9<span className="text-2xl md:text-3xl ml-1 -mt-2">★</span></h4>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#2F4F44] font-semibold">Google Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}