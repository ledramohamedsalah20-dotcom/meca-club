import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="MECA CLUB" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold text-white">MECA CLUB</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Club scientifique innovant dédié à la mécanique, la robotique et l'ingénierie depuis 1985.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/MECA.CLUB.USTHB/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/meca.club.usthb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://dz.linkedin.com/company/mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-500 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-red-500 transition-colors">
                  Événements
                </a>
              </li>
              <li>
                <a href="#formations" className="text-gray-400 hover:text-red-500 transition-colors">
                  Formations
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-red-500 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-red-500 transition-colors">
                  Équipe
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="text-red-500 flex-shrink-0 mt-1" />
                <span>USTHB, Bab Ezzouar<br />Alger, Algérie</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-red-500 flex-shrink-0" />
                <a href="mailto:meca.club.usthb@gmail.com" className="hover:text-red-500 transition-colors">
                  meca.club.usthb@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-red-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} MECA CLUB USTHB. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> by MECA CLUB Team
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
