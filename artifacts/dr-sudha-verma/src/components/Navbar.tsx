import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LuxuryLogo } from './LuxuryLogo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  const menuVariants: Variants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    open:   { opacity: 1, height: 'auto', transition: { duration: 0.35, ease: 'easeInOut' } },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, x: -18 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.08 + i * 0.06, duration: 0.3, ease: 'easeOut' },
    }),
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'bg-[#FBF8F3]/92 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <motion.div whileHover={{ scale: 1.07 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <LuxuryLogo size={48} variant={scrolled ? 'dark' : 'light'} />
          </motion.div>
          <span className={`font-serif text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`}>
            Dr Sudha Verma
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-7">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 group/link ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`}
              >
                {link.name}
                {/* Underline slide-in */}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#C9A96A] group-hover/link:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>

          <motion.a
            href="https://wa.me/917276361426"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            className={`px-5 py-2.5 border border-[#C9A96A] text-sm font-medium hover:bg-[#C9A96A] hover:text-[#FBF8F3] transition-colors duration-300 gold-glow rounded-full ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`}
          >
            Book Appointment
          </motion.a>
        </div>

        {/* Mobile toggle with icon rotation */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          whileTap={{ scale: 0.88 }}
          className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-[#3E2C23]' : 'text-[#FBF8F3]'}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <X size={26} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <Menu size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu with stagger links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-[#FBF8F3] border-t border-[#C9A96A]/25 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#3E2C23] text-base py-3 border-b border-[#C9A96A]/15 hover:text-[#C9A96A] hover:pl-2 transition-all duration-200 font-medium tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/917276361426"
                target="_blank"
                rel="noreferrer"
                custom={links.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                whileTap={{ scale: 0.97 }}
                className="mt-4 px-5 py-3.5 text-center bg-[#3E2C23] text-[#C9A96A] font-semibold tracking-widest text-sm hover:bg-[#2A1E18] transition-colors duration-250 rounded-full"
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
