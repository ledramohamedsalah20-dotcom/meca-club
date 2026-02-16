import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Plane, Users as UsersIcon, Car } from 'lucide-react';

const Events = () => {
  const events = [
    {
      icon: <Cpu size={40} />,
      title: "SOLIDCHRONO",
      description: "Compétition SolidWorks destinée aux étudiants en génie mécanique. Relevez des défis techniques inspirés du réel pour stimuler votre créativité et vos compétences en modélisation 3D.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Plane size={40} />,
      title: "MECAFEST",
      description: "Cycle de conférences et hackathon en électronique axé sur l'avionique. Renforcez vos compétences en mécanique aéronautique tout en créant des connexions professionnelles.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <UsersIcon size={40} />,
      title: "TECHWOMEN",
      description: "Événement mettant en lumière le rôle des femmes dans les domaines techniques et scientifiques. Conférences inspirantes, ateliers pratiques et hackathon électronique.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Car size={40} />,
      title: "KARTING STUDENT",
      description: "Compétition nationale d'ingénierie automobile fondée par MECA CLUB. Concevez, fabriquez et mettez en course votre propre kart dans une expérience complète.",
      color: "from-pink-500 to-red-600"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Nos Événements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez nos événements phares qui rassemblent les passionnés de technologie et d'innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/60 transition-all h-full">
                
                {/* Icon avec gradient */}
                <div className={`w-20 h-20 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {event.icon}
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {event.description}
                </p>

                {/* Effet lumineux au survol */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
