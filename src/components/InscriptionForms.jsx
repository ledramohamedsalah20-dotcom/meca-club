import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Building2, X, CheckCircle, AlertCircle } from 'lucide-react';


const InscriptionForms = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


  // URLs Google Sheets
  const SHEET1_URL = 'https://script.google.com/macros/s/AKfycbzZx7StfOmO58tn50cs0CwNpj2VGrbIbQ5MER-9ohwWClM7ynZR1kkj0Thpslnmb_nT/exec';
  const SHEET2_URL = 'https://script.google.com/macros/s/AKfycbzNFCPPzHv75mXAiKtQKTICFgoA7ERhmF-hYGAqGFDGMzikbhkfNsK2X5DygHunwJqq/exec';


  // Vérifier si les inscriptions départements sont ouvertes
  const isDeptsOpen = () => {
    const now = new Date();
    const startDate = new Date('2026-02-16T00:00:00');
    const endDate = new Date('2026-02-19T23:59:59'); // ✅ JUSQU'AU 19 FÉVRIER
    return now >= startDate && now <= endDate;
  };


  // État formulaire général
  const [formGeneral, setFormGeneral] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    carteEtudiant: '',
    dateNaissance: '',
    email: '',
    specialite: '',
    niveauEtude: '',
    parleDeToi: '',
    connaissanceClub: '',
    pourquoiRejoindre: '',
    ceQueTuApportes: '',
    ceQueTuAttends: '',
    hobbies: '',
    centreInteret: ''
  });


  // État formulaire départements
  const [formDepts, setFormDepts] = useState({
    nom: '',
    prenom: '',
    email: '',
    departement1: '',
    pourquoiDept1: '',
    departement2: '',
    pourquoiDept2: ''
  });


  const departements = [
    'RH (Ressources Humaines)',
    'RI (Relation Interne)',
    'RE (Relation Externe)',
    'Logistique',
    'Technique',
    'Training',
    'Marketing',
    'Media',
    'Design',
    'Evenementiel',

    ];


  // Soumission formulaire général
  const handleSubmitGeneral = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);


    try {
      const response = await fetch(SHEET1_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formGeneral)
      });


      setSubmitStatus({ type: 'success', message: '✅ Inscription enregistrée avec succès ! Bienvenue au MECA CLUB !' });
      setFormGeneral({
        nom: '', prenom: '', telephone: '', carteEtudiant: '', dateNaissance: '',
        email: '', specialite: '', niveauEtude: '', parleDeToi: '', connaissanceClub: '',
        pourquoiRejoindre: '', ceQueTuApportes: '', ceQueTuAttends: '', hobbies: '', centreInteret: ''
      });
      
      setTimeout(() => setActiveForm(null), 3000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '❌ Erreur lors de l\'envoi. Réessayez ou contactez-nous.' });
    } finally {
      setIsSubmitting(false);
    }
  };


  // Soumission formulaire départements
  const handleSubmitDepts = async (e) => {
    e.preventDefault();
    
    if (!isDeptsOpen()) {
      setSubmitStatus({ type: 'error', message: '⏰ Les inscriptions aux départements sont fermées (du 16 au 19 février uniquement).' });
      return;
    }


    if (formDepts.departement1 === formDepts.departement2) {
      setSubmitStatus({ type: 'error', message: '⚠️ Veuillez choisir deux départements différents.' });
      return;
    }


    setIsSubmitting(true);
    setSubmitStatus(null);


    try {
      const response = await fetch(SHEET2_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDepts)
      });


      setSubmitStatus({ type: 'success', message: '✅ Inscription aux départements enregistrée ! On vous contactera bientôt.' });
      setFormDepts({
        nom: '', prenom: '', email: '', departement1: '', pourquoiDept1: '', departement2: '', pourquoiDept2: ''
      });
      
      setTimeout(() => setActiveForm(null), 3000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '❌ Erreur lors de l\'envoi. Réessayez.' });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="rejoignez-nous" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Rejoignez-Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Prêt à faire partie de l'aventure MECA CLUB ? Inscris-toi dès maintenant !
          </p>
        </motion.div>


        {/* Boutons de sélection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Bouton Inscription Générale */}
          <motion.button
            onClick={() => setActiveForm('general')}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group bg-gradient-to-br from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-500/30 hover:border-red-500 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Inscription Générale</h3>
            <p className="text-gray-300 text-sm">Deviens membre du MECA CLUB</p>
            <div className="mt-4 px-4 py-2 bg-green-500/20 rounded-full inline-block">
              <span className="text-green-400 font-semibold text-sm">✅ Toujours ouvert</span>
            </div>
          </motion.button>


          {/* Bouton Départements */}
          <motion.button
            onClick={() => setActiveForm('depts')}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/30 hover:border-blue-500 transition-all"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Départements</h3>
            <p className="text-gray-300 text-sm">Choisis 2 départements</p>
            <div className="mt-4 px-4 py-2 bg-yellow-500/20 rounded-full inline-block">
              {isDeptsOpen() ? (
                <span className="text-yellow-400 font-semibold text-sm">⏰ Ouvert jusqu'au 19 février</span>
              ) : (
                <span className="text-red-400 font-semibold text-sm">❌ Inscriptions fermées</span>
              )}
            </div>
          </motion.button>


        </div>


        {/* Modales des formulaires */}
        <AnimatePresence>
          {activeForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveForm(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-2xl border border-red-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-red-600 to-blue-600 p-6 rounded-t-2xl flex justify-between items-center z-10">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    {activeForm === 'general' ? <Users size={28} /> : <Building2 size={28} />}
                    {activeForm === 'general' ? 'Inscription Générale' : 'Inscription Départements'}
                  </h3>
                  <button onClick={() => setActiveForm(null)} className="text-white hover:scale-110 transition-transform">
                    <X size={28} />
                  </button>
                </div>


                {/* Contenu formulaire */}
                <div className="p-8">
                  
                  {/* Statut de soumission */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                        submitStatus.type === 'success' ? 'bg-green-500/20 border border-green-500' : 'bg-red-500/20 border border-red-500'
                      }`}
                    >
                      {submitStatus.type === 'success' ? <CheckCircle className="text-green-400" /> : <AlertCircle className="text-red-400" />}
                      <p className={submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}>{submitStatus.message}</p>
                    </motion.div>
                  )}


                  {/* FORMULAIRE GÉNÉRAL */}
                  {activeForm === 'general' && (
                    <form onSubmit={handleSubmitGeneral} className="space-y-6">
                      
                      {/* Informations personnelles */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Nom *</label>
                          <input
                            type="text"
                            required
                            value={formGeneral.nom}
                            onChange={(e) => setFormGeneral({...formGeneral, nom: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="Votre nom"
                          />
                        </div>


                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Prénom *</label>
                          <input
                            type="text"
                            required
                            value={formGeneral.prenom}
                            onChange={(e) => setFormGeneral({...formGeneral, prenom: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="Votre prénom"
                          />
                        </div>
                      </div>


                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Téléphone *</label>
                          <input
                            type="tel"
                            required
                            value={formGeneral.telephone}
                            onChange={(e) => setFormGeneral({...formGeneral, telephone: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="+213 XX XX XX XX"
                          />
                        </div>


                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">N° Carte Étudiant *</label>
                          <input
                            type="text"
                            required
                            value={formGeneral.carteEtudiant}
                            onChange={(e) => setFormGeneral({...formGeneral, carteEtudiant: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="Numéro de carte"
                          />
                        </div>
                      </div>


                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Date de Naissance *</label>
                          <input
                            type="date"
                            required
                            value={formGeneral.dateNaissance}
                            onChange={(e) => setFormGeneral({...formGeneral, dateNaissance: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                          />
                        </div>


                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Email *</label>
                          <input
                            type="email"
                            required
                            value={formGeneral.email}
                            onChange={(e) => setFormGeneral({...formGeneral, email: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="email@exemple.com"
                          />
                        </div>
                      </div>


                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Spécialité *</label>
                          <input
                            type="text"
                            required
                            value={formGeneral.specialite}
                            onChange={(e) => setFormGeneral({...formGeneral, specialite: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="Ex: Génie Mécanique"
                          />
                        </div>


                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Niveau d'Étude *</label>
                          <select
                            required
                            value={formGeneral.niveauEtude}
                            onChange={(e) => setFormGeneral({...formGeneral, niveauEtude: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                          >
                            <option value="" className="bg-gray-800 text-white">Sélectionnez</option>
                            <option value="L1" className="bg-gray-800 text-white">L1</option>
                            <option value="L2" className="bg-gray-800 text-white">L2</option>
                            <option value="L3" className="bg-gray-800 text-white">L3</option>
                            <option value="M1" className="bg-gray-800 text-white">M1</option>
                            <option value="M2" className="bg-gray-800 text-white">M2</option>
                          </select>
                        </div>
                      </div>


                      {/* Questions ouvertes */}
                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Parle-nous un peu de toi *</label>
                        <textarea
                          required
                          rows="3"
                          value={formGeneral.parleDeToi}
                          onChange={(e) => setFormGeneral({...formGeneral, parleDeToi: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none resize-none"
                          placeholder="Décris-toi en quelques lignes..."
                        />
                      </div>


                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Que connais-tu du MECA CLUB ? *</label>
                        <textarea
                          required
                          rows="3"
                          value={formGeneral.connaissanceClub}
                          onChange={(e) => setFormGeneral({...formGeneral, connaissanceClub: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none resize-none"
                          placeholder="Ta connaissance du club..."
                        />
                      </div>


                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Pourquoi veux-tu rejoindre le MECA CLUB ? *</label>
                        <textarea
                          required
                          rows="3"
                          value={formGeneral.pourquoiRejoindre}
                          onChange={(e) => setFormGeneral({...formGeneral, pourquoiRejoindre: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none resize-none"
                          placeholder="Tes motivations..."
                        />
                      </div>


                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Qu'est-ce que tu peux apporter au MECA CLUB ? *</label>
                        <textarea
                          required
                          rows="3"
                          value={formGeneral.ceQueTuApportes}
                          onChange={(e) => setFormGeneral({...formGeneral, ceQueTuApportes: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none resize-none"
                          placeholder="Tes compétences, ton expérience..."
                        />
                      </div>


                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Qu'est-ce que tu attends du MECA CLUB ? *</label>
                        <textarea
                          required
                          rows="3"
                          value={formGeneral.ceQueTuAttends}
                          onChange={(e) => setFormGeneral({...formGeneral, ceQueTuAttends: e.target.value})}
                          className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none resize-none"
                          placeholder="Tes attentes..."
                        />
                      </div>


                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Hobbies *</label>
                          <input
                            type="text"
                            required
                            value={formGeneral.hobbies}
                            onChange={(e) => setFormGeneral({...formGeneral, hobbies: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="Sport, lecture, musique..."
                          />
                        </div>


                        <div>
                          <label className="block text-gray-300 mb-2 font-semibold">Centre d'intérêt *</label>
                          <input
                            type="text"
                            required
                            value={formGeneral.centreInteret}
                            onChange={(e) => setFormGeneral({...formGeneral, centreInteret: e.target.value})}
                            className="w-full px-4 py-3 bg-white/5 border border-red-500/30 rounded-lg text-white focus:border-red-500 focus:outline-none"
                            placeholder="Robotique, programmation..."
                          />
                        </div>
                      </div>


                      {/* BOUTON MÉCANIQUE 🔨 */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-full px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                      >
                        {/* Effet d'engrenages en fond */}
                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                          >
                            ⚙️
                          </motion.div>
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                          >
                            ⚙️
                          </motion.div>
                        </div>


                        {/* Marteau animé */}
                        <motion.span
                          animate={isSubmitting ? { rotate: [-20, 20, -20] } : {}}
                          transition={{ duration: 0.3, repeat: isSubmitting ? Infinity : 0 }}
                          className="text-3xl"
                        >
                          🔨
                        </motion.span>


                        <span className="relative z-10">
                          {isSubmitting ? 'Forgeage en cours...' : 'Forger mon inscription'}
                        </span>


                        {/* Éclair d'impact */}
                        {!isSubmitting && (
                          <motion.span
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-2xl"
                          >
                            ⚡
                          </motion.span>
                        )}
                      </motion.button>
                    </form>
                  )}


                  {/* FORMULAIRE DÉPARTEMENTS */}
                  {activeForm === 'depts' && (
                    <>
                      {!isDeptsOpen() ? (
                        <div className="text-center py-12">
                          <AlertCircle size={64} className="text-red-500 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-white mb-2">Inscriptions fermées</h3>
                          <p className="text-gray-400">Les inscriptions aux départements étaient ouvertes du 16 au 19 février 2026.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmitDepts} className="space-y-6">
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-gray-300 mb-2 font-semibold">Nom *</label>
                              <input
                                type="text"
                                required
                                value={formDepts.nom}
                                onChange={(e) => setFormDepts({...formDepts, nom: e.target.value})}
                                className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                                placeholder="Votre nom"
                              />
                            </div>


                            <div>
                              <label className="block text-gray-300 mb-2 font-semibold">Prénom *</label>
                              <input
                                type="text"
                                required
                                value={formDepts.prenom}
                                onChange={(e) => setFormDepts({...formDepts, prenom: e.target.value})}
                                className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                                placeholder="Votre prénom"
                              />
                            </div>
                          </div>


                          <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Email *</label>
                            <input
                              type="email"
                              required
                              value={formDepts.email}
                              onChange={(e) => setFormDepts({...formDepts, email: e.target.value})}
                              className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                              placeholder="email@exemple.com"
                            />
                          </div>


                          <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Premier Département *</label>
                            <select
                              required
                              value={formDepts.departement1}
                              onChange={(e) => setFormDepts({...formDepts, departement1: e.target.value})}
                              className="w-full px-4 py-3 bg-gray-800 border border-blue-500/30 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                            >
                              <option value="" className="bg-gray-800 text-white">Choisissez un département</option>
                              {departements.map((dept, i) => (
                                <option key={i} value={dept} className="bg-gray-800 text-white">{dept}</option>
                              ))}
                            </select>
                          </div>


                          <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Pourquoi ce département ? *</label>
                            <textarea
                              required
                              rows="3"
                              value={formDepts.pourquoiDept1}
                              onChange={(e) => setFormDepts({...formDepts, pourquoiDept1: e.target.value})}
                              className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none"
                              placeholder="Explique pourquoi tu veux rejoindre ce département..."
                            />
                          </div>


                          <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Deuxième Département *</label>
                            <select
                              required
                              value={formDepts.departement2}
                              onChange={(e) => setFormDepts({...formDepts, departement2: e.target.value})}
                              className="w-full px-4 py-3 bg-gray-800 border border-blue-500/30 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                            >
                              <option value="" className="bg-gray-800 text-white">Choisissez un département</option>
                              {departements.map((dept, i) => (
                                <option key={i} value={dept} className="bg-gray-800 text-white">{dept}</option>
                              ))}
                            </select>
                          </div>


                          <div>
                            <label className="block text-gray-300 mb-2 font-semibold">Pourquoi ce département ? *</label>
                            <textarea
                              required
                              rows="3"
                              value={formDepts.pourquoiDept2}
                              onChange={(e) => setFormDepts({...formDepts, pourquoiDept2: e.target.value})}
                              className="w-full px-4 py-3 bg-white/5 border border-blue-500/30 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none"
                              placeholder="Explique pourquoi tu veux rejoindre ce département..."
                            />
                          </div>


                          {/* BOUTON MÉCANIQUE 🔨 */}
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                          >
                            {/* Effet d'engrenages en fond */}
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                              >
                                ⚙️
                              </motion.div>
                              <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                              >
                                ⚙️
                              </motion.div>
                            </div>


                            {/* Marteau animé */}
                            <motion.span
                              animate={isSubmitting ? { rotate: [-20, 20, -20] } : {}}
                              transition={{ duration: 0.3, repeat: isSubmitting ? Infinity : 0 }}
                              className="text-3xl"
                            >
                              🔨
                            </motion.span>


                            <span className="relative z-10">
                              {isSubmitting ? 'Assemblage en cours...' : 'Assembler mon inscription'}
                            </span>


                            {/* Boulon qui tourne */}
                            {!isSubmitting && (
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="text-2xl"
                              >
                                🔩
                              </motion.span>
                            )}
                          </motion.button>
                        </form>
                      )}
                    </>
                  )}


                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </section>
  );
};


export default InscriptionForms;
