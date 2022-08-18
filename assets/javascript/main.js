function criptografar(texto) {
  return texto
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat");
}

function descriptografar(texto) {
  return texto
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufat", "u");
}

function aplicarCriptografia() {
  var texto = document.getElementById("textarea").value;
  if (texto != " ") {
    document.getElementById("textarea").value = "";
    document.getElementById("textarea2").value = criptografar(texto);
  }
}

function aplicarDescriptografia() {
  var texto = document.getElementById("textarea2").value;
  if (texto != " ") {
    document.getElementById("textarea2").value = " ";
    document.getElementById("textarea").value = descriptografar(texto);
  }
}
