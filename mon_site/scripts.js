function effacer(value_defaut, id) {
  truk = document.getElementById(id);
  type = truk.tagName;
  type = type.toLowerCase();
  if (type == "input") {
    if (truk.value == value_defaut) truk.value = "";
  } else if (type == "textarea") {
    if (truk.innerHTML == value_defaut) truk.innerHTML = "";
  }
}

function changeColor() {
  b1.classList.toggle("click");
}

// Fonction pour générer les confettis
function throwConfetti() {
  confetti({
    particleCount: 100, // Nombre de confettis
    spread: 70, // Angle de dispersion
    origin: { y: 0.6 }, // Position de départ des confettis
  });
}

// Ajouter l'événement de clic sur le bouton
document
  .getElementById("celebrateBtn")
  .addEventListener("click", throwConfetti);

const b1 = document.getElementById("b1");
b1.addEventListener("click", changeColor);
