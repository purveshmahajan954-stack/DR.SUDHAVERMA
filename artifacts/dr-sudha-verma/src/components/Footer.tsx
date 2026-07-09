import { SiWhatsapp, SiInstagram, SiGooglemaps } from 'react-icons/si';
import { LuxuryLogo } from './LuxuryLogo';

export function Footer() {
  return (
    <footer className="bg-[#2A1E18] text-[#FBF8F3] pt-14 md:pt-24 pb-10 border-t-4 border-[#C9A96A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 mb-10 md:mb-20">
          <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-8">
              <LuxuryLogo size={56} variant="light" />
              <span className="font-serif text-xl md:text-2xl text-[#C9A96A] tracking-wide">Dr Sudha Verma</span>
            </div>
            <p className="text-[#FBF8F3]/80 font-serif italic text-lg md:text-2xl mb-6">
              "Rooted in Nature, Guided by Science"
            </p>
            <p className="text-[#FBF8F3]/60 text-base max-w-sm leading-relaxed">
              Providing holistic homoeopathic healing for chronic conditions, with a focus on deep, lasting wellness.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-[#C9A96A] text-xs uppercase tracking-[0.15em] font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-[#FBF8F3]/70 hover:text-[#C9A96A] text-sm tracking-wide transition-colors">Home</a></li>
              <li><a href="#about" className="text-[#FBF8F3]/70 hover:text-[#C9A96A] text-sm tracking-wide transition-colors">About Doctor</a></li>
              <li><a href="#services" className="text-[#FBF8F3]/70 hover:text-[#C9A96A] text-sm tracking-wide transition-colors">Services</a></li>
              <li><a href="#contact" className="text-[#FBF8F3]/70 hover:text-[#C9A96A] text-sm tracking-wide transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="md:col-span-8 lg:col-span-4">
            <h4 className="text-[#C9A96A] text-xs uppercase tracking-[0.15em] font-bold mb-8">Connect</h4>
            <div className="flex gap-4 mb-10">
              <a href="https://wa.me/917276361426" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="w-12 h-12 rounded-full border border-[#C9A96A]/40 flex items-center justify-center text-[#FBF8F3] hover:bg-[#C9A96A] hover:border-[#C9A96A] hover:text-[#2A1E18] transition-colors">
                <SiWhatsapp size={20} />
              </a>
              <a href="https://maps.google.com/maps?q=Samartha+Homoeopathic+Pharmacy+Kohinoor+Plaza+Ulhasnagar" target="_blank" rel="noreferrer" aria-label="View on Google Maps" className="w-12 h-12 rounded-full border border-[#C9A96A]/40 flex items-center justify-center text-[#FBF8F3] hover:bg-[#C9A96A] hover:border-[#C9A96A] hover:text-[#2A1E18] transition-colors">
                <SiGooglemaps size={20} />
              </a>
              <a href="#" aria-label="Follow on Instagram" className="w-12 h-12 rounded-full border border-[#C9A96A]/40 flex items-center justify-center text-[#FBF8F3] hover:bg-[#C9A96A] hover:border-[#C9A96A] hover:text-[#2A1E18] transition-colors">
                <SiInstagram size={20} />
              </a>
            </div>
            
            <a href="tel:+917276361426" className="inline-block py-3 px-6 border border-[#C9A96A]/40 text-[#FBF8F3]/90 text-sm tracking-widest hover:border-[#C9A96A] hover:text-[#C9A96A] transition-colors rounded-full">
              +91 72763 61426
            </a>
          </div>
        </div>

        <div className="border-t border-[#C9A96A]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#FBF8F3]/40 text-sm">
            © {new Date().getFullYear()} Dr Sudha Verma Homoeopathic Health Care.
          </p>
          <p className="text-[#FBF8F3]/40 text-sm flex items-center gap-2">
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}