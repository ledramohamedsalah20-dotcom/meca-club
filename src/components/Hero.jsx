import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Users, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-meca-blue-900 overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-meca-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-meca-blue-500 to-meca-gray-500"
          >
            MECA CLUB
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-300 mb-4"
          >
            USTHB - Since 1985
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Club scientifique innovant dédié à la mécanique, la robotique et l'ingénierie. 
            Rejoignez une communauté de plus de 1200 membres passionnés qui repoussent les limites de la technologie !
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <a 
              href="#rejoignez-nous"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-meca-blue-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-red-500/50 hover:shadow-red-500/80 transform hover:scale-105 transition-all"
            >
              Rejoignez-nous 🚀
            </a>
            <a 
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border border-red-500/50 hover:bg-white/20 transition-all"
            >
              Découvrir
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
            >
              <div className="text-red-500 mb-2 flex justify-center">
                <Users size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">1200+</div>
              <div className="text-gray-400 text-sm">Adhérents</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
            >
              <div className="text-red-500 mb-2 flex justify-center">
                <Award size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">300+</div>
              <div className="text-gray-400 text-sm">Membres Actifs</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
            >
              <div className="text-red-500 mb-2 flex justify-center">
                <Rocket size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-gray-400 text-sm">Projets</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
            >
              <div className="text-red-500 mb-2 flex justify-center">
                <Zap size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">39</div>
              <div className="text-gray-400 text-sm">Années d'Excellence</div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
