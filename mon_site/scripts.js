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

