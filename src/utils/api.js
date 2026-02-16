import axios from 'axios';

// ⚠️ IMPORTANT : Remplace cette URL par ton URL Google Apps Script
const GOOGLE_SCRIPT_URL = 'METS_TON_URL_GOOGLE_SCRIPT_ICI';

// Fonction pour envoyer l'inscription générale
export const submitInscription = async (formData) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, {
      type: 'inscription',
      ...formData
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Erreur inscription:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Fonction pour envoyer la sélection de départements
export const submitDepartements = async (formData) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, {
      type: 'departements',
      ...formData
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Erreur départements:', error);
    return {
      success: false,
      error: error.message
    };
  }
};
