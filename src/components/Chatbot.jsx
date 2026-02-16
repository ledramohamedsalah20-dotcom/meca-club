import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Bonjour ! Je suis l\'assistant virtuel du MECA CLUB. Comment puis-je vous aider ?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (question) => {
    const q = question.toLowerCase();

    // Salutations
    if (q.match(/bonjour|salut|hello|hi|bonsoir/)) {
      return '👋 Bonjour ! Bienvenue au MECA CLUB ! Comment puis-je vous aider aujourd\'hui ?';
    }

    // Questions sur le club
    if (q.match(/c'est quoi|qu'est|what is|meca club|présentation|description/)) {
      return '🎓 Le MECA CLUB USTHB est un club scientifique fondé en 1985, dédié à la mécanique, la robotique et l\'ingénierie. Nous comptons plus de 1200 adhérents et 300+ membres actifs !';
    }

    // Formations
    if (q.match(/formation|cours|apprendre|enseigner|training/)) {
      return '📚 Nous proposons plus de 20 formations par an :\n\n• Python\n• LaTeX\n• Arduino & Raspberry Pi\n• Programmation d\'API\n• SolidWorks\n• Ansys\n• Blender\n• Infographie\n\nToutes nos formations sont gratuites pour les membres !';
    }

    // Projets
    if (q.match(/projet|projects|réalisation|innovation/)) {
      return '🤖 Nos projets phares :\n\n• Voiture Autonome (8 membres)\n• Bras Robotique (6 membres)\n• Drone de Surveillance (10 membres)\n• Maison Intelligente IoT (5 membres)\n• Robot de Compétition (12 membres)\n• Système Énergétique (7 membres)\n\nNous réalisons plus de 20 projets par an !';
    }

    // Inscription/Adhésion
    if (q.match(/inscri|adhé|rejoindre|join|member|devenir/)) {
      return '✍️ Pour rejoindre le MECA CLUB :\n\n1. Remplissez le formulaire dans la section "Rejoignez-Nous"\n2. Ou contactez-nous directement à meca.club.usthb@gmail.com\n3. Suivez-nous sur nos réseaux sociaux !\n\nNous sommes impatients de vous accueillir ! 🚀';
    }

    // Contact
    if (q.match(/contact|email|téléphone|adresse|localisation/)) {
      return '📧 Coordonnées du MECA CLUB :\n\n📍 Adresse : USTHB, Bab Ezzouar, Alger, Algérie\n✉️ Email : meca.club.usthb@gmail.com\n\n🌐 Réseaux sociaux :\n• Facebook : MECA.CLUB.USTHB\n• Instagram : @meca.club.usthb\n• LinkedIn : mecaclubusthb\n• YouTube : @mecaclubusthb';
    }

    // Événements
    if (q.match(/événement|event|activité|sortie|workshop/)) {
      return '📅 Nous organisons régulièrement :\n\n• Workshops techniques\n• Compétitions de robotique\n• Conférences avec des experts\n• Sorties industrielles\n• Journées portes ouvertes\n\nConsultez la section "Événements" pour le calendrier complet !';
    }

    // Horaires
    if (q.match(/horaire|heure|ouvert|ferme|when|schedule/)) {
      return '🕒 Le MECA CLUB est ouvert :\n\nLundi - Jeudi : 9h00 - 17h00\n\nVenez nous rendre visite à tout moment pendant ces horaires !';
    }

    // Équipe
    if (q.match(/équipe|team|président|bureau|responsable/)) {
      return '👥 Notre équipe dirigeante :\n\n👑 Président\n🛡️ Vice-Président\n📋 Secrétaire Général\n📝 Secrétaire Général Adjoint (SGA)\n\nConsultez la section "Notre Équipe" pour plus de détails !';
    }

    // Histoire
    if (q.match(/histoire|history|fondation|création|1985/)) {
      return '📜 Le MECA CLUB a été fondé en 1985, soit 39 années d\'excellence ! Depuis, nous avons formé des milliers d\'ingénieurs et réalisé des centaines de projets innovants. Nous sommes fiers de notre héritage et continuons à repousser les limites de l\'innovation !';
    }

    // Python
    if (q.match(/python|programmation|code/)) {
      return '🐍 Nos formations Python couvrent :\n• Bases de Python\n• Data Science\n• Machine Learning\n• Automatisation\n• Projets pratiques\n\nParfait pour les débutants et intermédiaires !';
    }

    // Arduino
    if (q.match(/arduino|raspberry|électronique|capteur/)) {
      return '⚡ Formations Arduino & Raspberry Pi :\n• Initiation à l\'électronique\n• Programmation de microcontrôleurs\n• Projets IoT\n• Robotique embarquée\n\nIdéal pour créer vos propres projets !';
    }

    // SolidWorks / CAO
    if (q.match(/solidworks|cao|conception|3d|design/)) {
      return '📐 Formation SolidWorks :\n• Modélisation 3D\n• Assemblages\n• Mise en plan\n• Rétroingénierie\n\nApprenez à concevoir vos propres pièces !';
    }

    // Robotique
    if (q.match(/robot|robotique|automation|automatisation/)) {
      return '🤖 La robotique au MECA CLUB :\n• Cours théoriques et pratiques\n• Projets de groupe\n• Compétitions nationales\n• Workshops spécialisés\n\nRejoignez-nous pour créer le futur !';
    }

    // Tarifs/Prix
    if (q.match(/prix|tarif|coût|gratuit|payant|free/)) {
      return '💰 Toutes nos formations sont GRATUITES pour les membres du club ! L\'adhésion annuelle est symbolique. Rejoignez-nous pour accéder à toutes nos ressources et formations !';
    }

    // Niveau requis
    if (q.match(/niveau|débutant|expérience|prérequis/)) {
      return '📊 Nous accueillons tous les niveaux !\n\n✅ Débutants : Formations d\'initiation\n✅ Intermédiaires : Projets guidés\n✅ Avancés : Projets de recherche\n\nPas de prérequis nécessaires, juste de la motivation !';
    }

    // Merci
    if (q.match(/merci|thanks|thank you/)) {
      return '😊 Avec plaisir ! N\'hésitez pas si vous avez d\'autres questions. Au plaisir de vous accueillir au MECA CLUB ! 🚀';
    }

    // Au revoir
    if (q.match(/au revoir|bye|goodbye|ciao/)) {
      return '👋 Au revoir ! À bientôt au MECA CLUB ! N\'hésitez pas à revenir si vous avez des questions. Bonne journée ! 🌟';
    }

    // Réponse par défaut
    return '🤔 Je ne suis pas sûr de comprendre votre question. Voici ce que je peux vous dire :\n\n• Informations sur le club\n• Formations disponibles\n• Nos projets\n• Comment nous rejoindre\n• Contact et localisation\n• Événements\n\nPosez-moi une question sur ces sujets ! 😊';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    const response = getResponse(input);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-red-600 to-meca-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 z-50 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
      </motion.button>

      {/* Fenêtre du chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-gray-900 rounded-2xl shadow-2xl border border-red-500/30 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-meca-blue-600 p-4 rounded-t-2xl">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Assistant MECA CLUB
              </h3>
              <p className="text-white/80 text-xs">En ligne maintenant</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-red-600 to-meca-blue-600 text-white'
                        : 'bg-white/10 text-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-red-500/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez votre question..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-red-500/30 rounded-lg text-white text-sm focus:border-red-500 focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-meca-blue-600 rounded-lg hover:scale-105 transition-transform"
                >
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
