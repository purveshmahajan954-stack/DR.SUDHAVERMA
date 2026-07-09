import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LuxuryLogo } from './LuxuryLogo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FBF8F3]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <LuxuryLogo size={48} variant={scrolled ? 'dark' : 'light'} />
          </div>
          <span className={`font-serif text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`}>Dr Sudha Verma</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-[#C9A96A] transition-colors duration-300 ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`}>
                {link.name}
              </a>
            ))}
          </div>
          <a href="https://wa.me/917276361426" target="_blank" rel="noreferrer" className={`px-5 py-2.5 rounded-none border border-[#C9A96A] text-sm font-medium hover:bg-[#C9A96A] hover:text-[#FBF8F3] transition-all duration-300 gold-glow ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`}>
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FBF8F3] border-t border-[#C9A96A]/20"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-[#3E2C23] text-lg hover:text-[#C9A96A]">
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/917276361426" target="_blank" rel="noreferrer" className="mt-4 px-5 py-3 text-center border border-[#C9A96A] text-[#3E2C23] font-medium hover:bg-[#C9A96A] hover:text-[#FBF8F3]">
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}