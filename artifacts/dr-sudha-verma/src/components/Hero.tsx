import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=80" 
          alt="Sunlight through lush green forest — natural healing" 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Rich dark-to-transparent gradient so image breathes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3330]/60 via-[#2F4F44]/50 to-[#1E3330]/80"></div>
        {/* Subtle bottom fade to page background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FBF8F3] to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mb-8 flex justify-center">
            <span className="text-[#C9A96A] tracking-[0.2em] text-xs md:text-sm font-semibold uppercase px-5 py-2 border border-[#C9A96A]/60 rounded-full backdrop-blur-sm">
              Homoeopathic Health Care
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#FBF8F3] leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Heal Naturally.
            <br />
            <span className="text-[#C9A96A]">Live Fully.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#FBF8F3]/85 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience personalized homoeopathic care that treats the root cause — not just the symptoms — with decades of trusted expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <a href="https://wa.me/917276361426" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#C9A96A] text-[#1E3330] text-sm font-bold tracking-widest uppercase hover:bg-[#e0bc7e] transition-colors shadow-lg">
              Book Appointment
            </a>
            <a href="tel:+917276361426" className="w-full sm:w-auto px-8 py-4 border-2 border-[#FBF8F3]/70 text-[#FBF8F3] text-sm font-medium tracking-widest uppercase hover:bg-[#FBF8F3]/10 transition-colors backdrop-blur-sm">
              Call Now
            </a>
          </div>

          <div className="inline-flex items-center gap-3 bg-[#FBF8F3]/15 backdrop-blur-md px-5 py-3 rounded-full border border-[#FBF8F3]/25 whitespace-nowrap">
            <div className="flex text-[#C9A96A]">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[#FBF8F3] font-bold text-sm">4.9</span>
            <span className="text-[#FBF8F3]/40">|</span>
            <span className="text-[#FBF8F3]/85 text-sm font-medium">84 Google Reviews</span>
            <FcGoogle className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}