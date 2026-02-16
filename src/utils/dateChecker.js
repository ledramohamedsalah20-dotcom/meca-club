// Fonction qui vérifie si les inscriptions départements sont encore ouvertes
export const checkDepartmentAvailability = () => {
  const today = new Date();
  const deadline = new Date('2026-02-16T23:59:59');
  return today <= deadline;
};

// Fonction pour afficher combien de temps reste
export const getTimeRemaining = () => {
  const today = new Date();
  const deadline = new Date('2026-02-16T23:59:59');
  
  const difference = deadline - today;
  
  if (difference <= 0) {
    return "Inscriptions fermées";
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  return `${days} jours et ${hours} heures restantes`;
};
