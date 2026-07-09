import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80" 
          alt="Natural wellness leaves" 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Soft gradient overlay from cream/ivory bottom to transparent top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBF8F3] via-[#FBF8F3]/80 to-transparent"></div>
        {/* Additional warm overlay */}
        <div className="absolute inset-0 bg-[#FBF8F3]/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 flex justify-center">
            <span className="text-[#C9A96A] tracking-[0.15em] text-xs md:text-sm font-semibold uppercase px-4 py-1 border border-[#C9A96A]/40 rounded-full bg-[#FBF8F3]/60 backdrop-blur-sm">
              Homoeopathic Health Care
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#2F4F44] leading-tight mb-6 tracking-tight">
            Gentle Healing,<br className="hidden md:block" /> Rooted in Trust
          </h1>
          
          <p className="text-lg md:text-xl text-[#2F4F44]/90 font-sans max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Experience natural, personalized care that honors your body's own healing intelligence. We treat the root cause, not just the symptoms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
            <a href="https://wa.me/917276361426" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#2F4F44] text-[#C9A96A] text-sm font-medium tracking-wide uppercase hover:bg-[#1E3330] transition-colors gold-glow border border-[#2F4F44]">
              Book Appointment
            </a>
            <a href="tel:+917276361426" className="w-full sm:w-auto px-8 py-4 border border-[#C9A96A] text-[#C9A96A] text-sm font-medium tracking-wide uppercase hover:bg-[#C9A96A] hover:text-[#FBF8F3] transition-colors gold-glow bg-[#FBF8F3]/70 backdrop-blur-sm">
              Call Now
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 bg-[#FBF8F3]/70 backdrop-blur-md px-6 py-3 rounded-full inline-flex border border-[#C9A96A]/20">
            <div className="flex text-[#C9A96A]">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#2F4F44] font-semibold text-sm">4.9 Rating</span>
              <span className="text-[#2F4F44]/50 text-sm">•</span>
              <span className="text-[#2F4F44] font-medium text-sm">84 Google Reviews</span>
              <FcGoogle className="w-4 h-4 ml-1" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}