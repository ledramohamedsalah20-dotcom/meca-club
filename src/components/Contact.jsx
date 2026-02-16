import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-meca-blue-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-3xl font-bold text-white mb-6">Nos Coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Adresse</h4>
                  <p className="text-gray-300">USTHB, Bab Ezzouar<br />Alger, Algérie</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-300">meca.club.usthb@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-500/50 shadow-2xl shadow-red-500/30"
              >
                <img src="/logo.png" alt="MECA CLUB" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Suivez-nous</h3>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://www.facebook.com/MECA.CLUB.USTHB/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <Facebook size={28} className="text-white" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/meca.club.usthb/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                <Instagram size={28} className="text-white" />
              </motion.a>
              <motion.a
                href="https://dz.linkedin.com/company/mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-600/50 transition-all"
              >
                <Linkedin size={28} className="text-white" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@mecaclubusthb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition-all"
              >
                <Youtube size={28} className="text-white" />
              </motion.a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
