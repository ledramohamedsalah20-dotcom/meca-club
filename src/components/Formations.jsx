import React from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, Cpu, Zap, Settings, Box, Palette, Image } from 'lucide-react';

const Formations = () => {
  const formations = [
    {
      icon: <Code size={36} />,
      title: "Python",
      description: "Découvrez la logique simple et puissante de Python, adapté aux débutants comme aux projets avancés.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FileText size={36} />,
      title: "LaTeX",
      description: "Créez des documents scientifiques et professionnels avec une présentation soignée et structurée.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cpu size={36} />,
      title: "Arduino & Raspberry Pi",
      description: "Explorez les technologies embarquées à travers des projets combinant électronique, programmation et créativité.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Zap size={36} />,
      title: "Programmation d'API",
      description: "Initiez-vous à la conception et l'intégration d'API pour connecter efficacement différentes applications.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Settings size={36} />,
      title: "SolidWorks",
      description: "Approfondissez la maîtrise de SolidWorks et découvrez les méthodes de rétroingénierie.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Box size={36} />,
      title: "Ansys",
      description: "Initiez-vous aux outils de simulation numérique pour résoudre des problématiques complexes en ingénierie.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Palette size={36} />,
      title: "Blender",
      description: "Découvrez la création 3D artistique : modélisation, animation et rendu visuel de qualité professionnelle.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Image size={36} />,
      title: "Infographie",
      description: "Développez un œil artistique et produisez des visuels impactants grâce aux bases du design graphique.",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="formations" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Nos Formations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-meca-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Plus de 20 formations par an pour développer vos compétences techniques et professionnelles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 hover:border-red-500/60 transition-all h-full">
                
                <div className={`w-16 h-16 bg-gradient-to-br ${formation.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {formation.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {formation.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {formation.description}
                </p>

                <div className={`absolute inset-0 bg-gradient-to-br ${formation.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Formations;
