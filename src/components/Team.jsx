import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, FileText, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Rouane Billel",
      role: "Président du Club",
      icon: <Crown size={40} />,
      description: "Leadership et vision stratégique du club",
      color: "from-yellow-500 to-orange-500",
      email: "Billelrouane1@gmail.com"
    },
    {
      name: "Dihia Serghane",
      role: "Vice-Présidente",
      icon: <Shield size={40} />,
      description: "Coordination et organisation générale",
      color: "from-blue-500 to-cyan-500",
      email: "dihiaserghane@gmail.com"
    },
    {
      name: "Yani Seghouani",
      role: "Secrétaire Général",
      icon: <FileText size={40} />,
      description: "Gestion administrative et communication",
      color: "from-purple-500 to-pink-500",
      email: "Seghouaniyani@gmail.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Notre Équipe
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-meca-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une équipe passionnée et dévouée qui œuvre pour faire rayonner le MECA CLUB
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-500/60 transition-all h-full flex flex-col items-center text-center">
                
                <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                  <div className="text-white">
                    {member.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                <div className={`text-sm font-bold px-4 py-1 rounded-full bg-gradient-to-r ${member.color} text-white mb-4`}>
                  {member.role}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="mt-auto">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-red-500/50 transition-all group/btn"
                  >
                    <Mail size={18} className="text-white" />
                    <span className="text-white text-sm font-medium">Contacter</span>
                  </a>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
