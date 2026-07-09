import { motion } from 'framer-motion';
import { ShieldCheck, Star, HeartHandshake, Wallet } from 'lucide-react';

const reasons = [
  { icon: <ShieldCheck className="w-8 h-8 text-[#C9A96A]" strokeWidth={1.5} />, title: "Experienced & Trusted" },
  { icon: <Star className="w-8 h-8 text-[#C9A96A]" strokeWidth={1.5} />, title: "4.9★ Google Rated" },
  { icon: <HeartHandshake className="w-8 h-8 text-[#C9A96A]" strokeWidth={1.5} />, title: "Personalized Care" },
  { icon: <Wallet className="w-8 h-8 text-[#C9A96A]" strokeWidth={1.5} />, title: "Transparent Pricing" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#2A1E18] text-[#FBF8F3]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-[#C9A96A]"></span>
            <span className="text-[#C9A96A] text-xs font-semibold tracking-[0.12em] uppercase">Why Choose Us</span>
            <span className="h-[1px] w-12 bg-[#C9A96A]"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-[#FBF8F3]"
          >
            A Sanctuary for Healing
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#3E2C23] p-10 text-center flex flex-col items-center justify-center border-b-4 border-[#C9A96A] hover:bg-[#254238] transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-[#2A1E18] flex items-center justify-center mb-6 shadow-inner border border-[#C9A96A]/20">
                {reason.icon}
              </div>
              <h4 className="text-[#FBF8F3] font-serif text-xl">{reason.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}