import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bot, Rocket, Lightbulb, Trophy, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Car size={48} />,
      title: "Voiture Autonome",
      description: "Développement d'un véhicule autonome intelligent capable de navigation et détection d'obstacles en temps réel.",
      category: "Robotique",
      color: "from-blue-500 to-cyan-500",
      stats: { team: "8 membres", duration: "6 mois" }
    },
    {
      icon: <Bot size={48} />,
      title: "Bras Robotique",
      description: "Conception et programmation d'un bras robotique à 6 axes pour manipulation de précision industrielle.",
      category: "Automatisation",
      color: "from-purple-500 to-pink-500",
      stats: { team: "6 membres", duration: "4 mois" }
    },
    {
      icon: <Rocket size={48} />,
      title: "Drone de Surveillance",
      description: "Drone autonome équipé de caméras et capteurs pour applications de surveillance et cartographie.",
      category: "Aérospatial",
      color: "from-red-500 to-orange-500",
      stats: { team: "10 membres", duration: "8 mois" }
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Maison Intelligente",
      description: "Système domotique IoT complet pour automatisation et contrôle à distance de l'habitat.",
      category: "IoT",
      color: "from-yellow-500 to-orange-500",
      stats: { team: "5 membres", duration: "5 mois" }
    },
    {
      icon: <Trophy size={48} />,
      title: "Robot Compétition",
      description: "Robot mobile conçu pour participer aux compétitions nationales et internationales de robotique.",
      category: "Compétition",
      color: "from-green-500 to-emerald-500",
      stats: { team: "12 membres", duration: "10 mois" }
    },
    {
      icon: <Zap size={48} />,
      title: "Système Énergétique",
      description: "Solution innovante de gestion et optimisation de l'énergie renouvelable pour applications industrielles.",
      category: "Énergie",
      color: "from-teal-500 to-cyan-500",
      stats: { team: "7 membres", duration: "6 mois" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Nos Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-meca-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des projets innovants qui repoussent les limites de la technologie et de l'ingénierie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-500/60 transition-all h-full flex flex-col">
                
                <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>

                <div className="mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex justify-between text-sm text-gray-400 pt-4 border-t border-red-500/20">
                  <div>
                    <span className="font-semibold text-red-400">👥</span> {project.stats.team}
                  </div>
                  <div>
                    <span className="font-semibold text-red-400">⏱️</span> {project.stats.duration}
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
