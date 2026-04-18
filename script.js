// Abrir janela

function abrirBloco() {

  document.getElementById("janela").classList.remove("hidden");

}

// Fechar janela

function fecharBloco() {

  document.getElementById("janela").classList.add("hidden");

}

// Falas do pet

const falas = [

  "Oi... 😊",

  "Você abriu algo...",

  "Eu consigo ver isso 😐",

  "Vamos continuar..."

];

let i = 0;

document.getElementById("pet").onclick = function () {

  document.getElementById("fala").innerText = falas[i];

  i++;

  if (i >= falas.length) {

    i = 0;

  }

};