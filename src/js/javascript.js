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

  /* Função de lop de 0 até o número da página de feedback... */
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  animateValue(obj, 100, 0, 5000);
  
