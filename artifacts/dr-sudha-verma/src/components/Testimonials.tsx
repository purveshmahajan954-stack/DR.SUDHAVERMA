import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const reviews = [
  {
    name: "Meena Patil",
    text: "Dr. Sudha Verma is truly exceptional. After years of struggling with chronic skin issues and failed treatments, she identified the root cause within two consultations. Her medicines are gentle, and her guidance is warm and unhurried. Highly recommended."
  },
  {
    name: "Rahul Sharma",
    text: "My mother had severe joint pain for years. Within 3 months of Dr. Verma's treatment, she is walking without pain. The best part is — no side effects. This clinic is a blessing for our family."
  },
  {
    name: "Priya Desai",
    text: "I was skeptical about homoeopathy, but Dr. Verma changed my perspective completely. She listens patiently, explains everything, and her remedies actually work. My acidity and IBS are gone after years of suffering."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-[#FBF8F3] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader kicker="What Patients Say" title="Stories of Healing" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-6 md:p-10 relative shadow-[0_4px_30px_-5px_rgba(47,79,68,0.06)] border border-[#C9A96A]/10 h-full flex flex-col justify-between"
            >
              <div className="text-[#C9A96A]/10 font-serif text-7xl md:text-9xl absolute -top-2 md:-top-4 left-2 leading-none select-none">"</div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-8 text-[#C9A96A]">
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-[#3E2C23]/80 italic mb-10 text-base md:text-lg leading-relaxed">
                  {review.text}
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between border-t border-[#C9A96A]/20 pt-6">
                <span className="font-serif text-[#3E2C23] font-medium text-lg">{review.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-[#C9A96A] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]"></span> Google Review
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}