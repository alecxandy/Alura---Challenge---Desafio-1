function criptografar(texto) {
  return texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
}

function descriptografar(texto) {
  return texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
}

function aplicarCriptografia() {
  var texto = document.getElementById("textarea").value;
  if (texto != "") {
    document.getElementById("textarea").value = "";
    document.getElementById("textarea2").value = criptografar(texto);
    document.getElementById("textarea2").style.backgroundImage = "none";
  }
}

function aplicarDescriptografia() {
  var texto = document.getElementById("textarea2").value;
  if (texto != "") {
    document.getElementById("textarea").value = descriptografar(texto);
    document.getElementById("textarea2").value = "";
  }
}

function copiarTexto() {
  var content = document.getElementById("textarea2");
  if (content.value != "") {
    content.select();
    content.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(content.value);
    alert(" Copiado com sucesso! " + content.value);
  }
}
