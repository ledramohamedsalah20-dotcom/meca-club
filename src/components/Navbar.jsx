import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Événements', href: '#events' },
    { name: 'Formations', href: '#formations' },
    { name: 'Projets', href: '#projects' },
    { name: 'Équipe', href: '#team' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-red-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Icônes réseaux sociaux */}
          <div className="flex items-center gap-4">
            {/* Logo rond */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-500/50 shadow-lg shadow-red-500/30"
            >
              <img 
                src="/logo.png" 
                alt="MECA CLUB" 
                className="w-full h-full object-cover"
              />
            </motion.a>

            {/* Icônes réseaux sociaux */}
            <div className="hidden md:flex items-center gap-2">
              <motion.a
                href="https://www.facebook.com/MECA.CLUB.USTHB/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <Facebook size={18} className="text-white" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/meca.club.usthb/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-9 h-9 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
              >
                <Instagram size={18} className="text-white" />
              </motion.a>

              <motion.a
                href="https://dz.linkedin.com/company/mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center"
              >
                <Linkedin size={18} className="text-white" />
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center"
              >
                <Youtube size={18} className="text-white" />
              </motion.a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-red-500 transition-colors font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="#rejoignez-nous"
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-meca-blue-600 text-white rounded-full font-bold shadow-lg shadow-red-500/50 hover:shadow-red-500/80 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rejoignez-nous
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg rounded-lg mt-2 p-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-red-500 transition-colors font-medium py-2"
              >
                {link.name}
              </a>
            ))}

            {/* Icônes réseaux sociaux mobile */}
            <div className="flex justify-center gap-3 pt-4">
              <a
                href="https://www.facebook.com/MECA.CLUB.USTHB/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <Facebook size={20} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/meca.club.usthb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
              >
                <Instagram size={20} className="text-white" />
              </a>

              <a
                href="https://dz.linkedin.com/company/mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center"
              >
                <Linkedin size={20} className="text-white" />
              </a>

              <a
                href="https://www.youtube.com/@mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>

            <a
              href="#rejoignez-nous"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-meca-blue-600 text-white rounded-full font-bold shadow-lg"
            >
              Rejoignez-nous
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
