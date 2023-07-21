function showText() {
    document.getElementById("cadButton").innerHTML = "<span style='color: #1D63FF;'>Cadastre-se gratuitamente →</span>"; 
  }

function reset() {
    document.getElementById("cadButton").innerHTML = "<span style='color: #1D63FF;'>Cadastre-se gratuitamente</span>"; 
  }

/* Inicio função para Acess */
function showAcess() {
    document.getElementById("acButton").innerHTML = "<span style='color: #1D63FF;'>Acessar</span>"; 
  }

function resetAcess() {
    document.getElementById("acButton").innerHTML = ""; 
  }

  /* Inicio função para Fale Conosco */
function showHero() {
  document.getElementById("hero-c").innerHTML = "<span style='color: black;'>Fale conosco</span>"; 
}

function resetHero() {
  document.getElementById("hero-c").innerHTML = ""; 
}
// Função Aleatória
function getstring(){
  var txts = ['sucesso!', 'destaque!','impacto!'];
  var numero = Math.floor(Math.random() * txts.length);
return txts[numero]; 
}

//Modal
const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function() {
  modal.showModal()
}

buttonClose.onclick = function() {
  modal.close()
}