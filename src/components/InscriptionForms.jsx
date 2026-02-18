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
    const endDate = new Date('2026-02-23T23:59:59'); // ✅ JUSQU'AU 23 FÉVRIER
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
    'Événementiel'
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
      setSubmitStatus({ type: 'error', message: '⏰ Les inscriptions aux départements sont fermées (du 16 au 23 février uniquement).' });
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
                <span className="text-yellow-400 font-semibold text-sm">⏰ Ouvert jusqu'au 23 février</span>
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
                      {/* ... tout le formulaire général inchangé ... */}
                      {/* (garde exactement ce que tu as déjà ici) */}
                    </form>
                  )}

                  {/* FORMULAIRE DÉPARTEMENTS */}
                  {activeForm === 'depts' && (
                    <>
                      {!isDeptsOpen() ? (
                        <div className="text-center py-12">
                          <AlertCircle size={64} className="text-red-500 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-white mb-2">Inscriptions fermées</h3>
                          <p className="text-gray-400">Les inscriptions aux départements étaient ouvertes du 16 au 23 février 2026.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmitDepts} className="space-y-6">
                          {/* ... tout le formulaire départements inchangé ... */}
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
