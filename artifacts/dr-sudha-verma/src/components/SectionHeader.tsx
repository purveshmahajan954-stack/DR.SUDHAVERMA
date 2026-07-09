import { motion } from 'framer-motion';

export function SectionHeader({ kicker, title, align = "center" }: { kicker: string, title: string, align?: "center" | "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4 justify-center"
        style={{ justifyContent: align === "center" ? "center" : "flex-start" }}
      >
        <span className="h-[1px] w-12 bg-[#C9A96A]"></span>
        <span className="text-[#C9A96A] text-xs font-semibold tracking-[0.12em] uppercase">{kicker}</span>
        <span className="h-[1px] w-12 bg-[#C9A96A]"></span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#3E2C23] leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}