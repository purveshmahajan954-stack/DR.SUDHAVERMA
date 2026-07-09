import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Activity, Sparkles, Baby, Flower2, Bone, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: "Chronic Illness",
    description: "Long-term conditions managed gently from the root, providing lasting relief."
  },
  {
    icon: Sparkles,
    title: "Skin & Allergy",
    description: "Eczema, urticaria, psoriasis and more — addressed completely without steroids."
  },
  {
    icon: Baby,
    title: "Child Care",
    description: "Safe, gentle remedies for growing bodies, boosting natural immunity."
  },
  {
    icon: Flower2,
    title: "Women's Health",
    description: "Hormonal balance, PCOS, and reproductive wellness handled with sensitivity."
  },
  {
    icon: Bone,
    title: "Joint & Bone Pain",
    description: "Arthritis and musculoskeletal relief through natural, effective remedies."
  },
  {
    icon: Stethoscope,
    title: "Digestive Care",
    description: "IBS, acidity, and bloating addressed holistically for a calm gut."
  }
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-24 bg-[#FBF8F3]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader kicker="What We Treat" title="Specialized Care" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 24px 40px -10px rgba(62,44,35,0.13)" }}
                className="bg-white border border-[#C9A96A]/20 p-8 relative group overflow-hidden cursor-default"
                style={{ boxShadow: "0 10px 30px -10px rgba(47,79,68,0.05)" }}
              >
                {/* Gold top bar slides in on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C9A96A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                {/* Icon with spring bounce */}
                <motion.div
                  className="mb-6 p-4 bg-[#8B6F5E]/10 inline-flex rounded-full group-hover:bg-[#8B6F5E]/20 transition-colors duration-300"
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 16 }}
                >
                  <Icon className="w-8 h-8 text-[#C9A96A]" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-xl font-serif text-[#3E2C23] mb-3 font-medium">{service.title}</h3>
                <p className="text-[#3E2C23]/70 leading-relaxed text-sm md:text-base">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
