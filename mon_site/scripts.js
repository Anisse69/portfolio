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
    b1.classList.toggle('nformulaire');
}


const b1 = document.getElementById("b1")
b1.addEventListener("click", changeColor);