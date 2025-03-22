// Fonction pour générer les confettis
function tConfetti() {
    confetti({
      particleCount: 150,  
      spread: 90,          
      origin: { y: 0.6 },  
      colors: ['#ff6347', '#32cd32', '#1e90ff'],  
      shapes: ['square', 'circle'], 
      gravity: 0.7        
    });
  }

// Ajouter l'événement de clic sur le bouton
document
  .getElementById("celebrateBtn")
  .addEventListener("click", tConfetti);

