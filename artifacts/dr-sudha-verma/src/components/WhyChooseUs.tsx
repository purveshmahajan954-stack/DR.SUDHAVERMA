import { motion } from 'framer-motion';
import { ShieldCheck, Star, HeartHandshake, Wallet } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: "Experienced & Trusted" },
  { icon: Star,        title: "4.9★ Google Rated" },
  { icon: HeartHandshake, title: "Personalized Care" },
  { icon: Wallet,      title: "Transparent Pricing" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#2A1E18] text-[#FBF8F3]">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-[#C9A96A]" />
            <span className="text-[#C9A96A] text-xs font-semibold tracking-[0.12em] uppercase">Why Choose Us</span>
            <span className="h-[1px] w-12 bg-[#C9A96A]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#FBF8F3] leading-tight"
          >
            A Sanctuary for Healing
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-[#3E2C23] p-8 md:p-10 text-center flex flex-col items-center justify-center border-b-4 border-[#C9A96A] hover:bg-[#2A1E18] transition-colors duration-300 cursor-default group"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#2A1E18] flex items-center justify-center mb-6 shadow-inner border border-[#C9A96A]/20 group-hover:border-[#C9A96A]/60 transition-colors duration-300"
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <Icon className="w-8 h-8 text-[#C9A96A]" strokeWidth={1.5} />
                </motion.div>
                <h4 className="text-[#FBF8F3] font-serif text-lg md:text-xl">{reason.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
