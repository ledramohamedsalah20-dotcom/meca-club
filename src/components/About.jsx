import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Le MECA CLUB, fondé en 1985, est un club scientifique à but non lucratif rattaché à la faculté de Génie Mécanique de l'USTHB.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/30"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Notre Histoire</h3>
            <p className="text-gray-300 leading-relaxed">
              Depuis <span className="text-cyan-400 font-bold">1985</span>, le MECA CLUB rassemble des étudiants passionnés par la mécanique, 
              l'électronique, l'automatique, l'informatique et la chimie. Avec plus de <span className="text-cyan-400 font-bold">39 années d'excellence</span>, 
              nous continuons de cultiver la curiosité, l'initiative et l'envie d'apprendre.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/30"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Notre Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Offrir un cadre d'apprentissage concret où la pratique occupe une place centrale. 
              Nous organisons des formations ciblées, encourageons la participation à des concours scientifiques, 
              et mettons en place divers événements pour préparer nos membres au monde professionnel.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Nos Missions</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Projets Concrets</h4>
              <p className="text-gray-400 text-sm">
                Concevoir et réaliser des projets techniques pour mettre en pratique les connaissances
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Compétences Pro</h4>
              <p className="text-gray-400 text-sm">
                Proposer des formations, ateliers et conférences pour la progression professionnelle
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Réseau</h4>
              <p className="text-gray-400 text-sm">
                Créer des passerelles entre étudiants, enseignants et professionnels
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Événements</h4>
              <p className="text-gray-400 text-sm">
                Organiser des compétitions, conférences et symposiums scientifiques
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
