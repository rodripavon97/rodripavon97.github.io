function navbarActive() {
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a").forEach((link) => {
      if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
      }
    });
  }

  
  let indice = 1;
  
  
  // esta funciona el boton de siguiente
  function avanzaSlide(number){
    muestraSlides( indice+=number );
}

// Esta funcion es para el selector de posición
function posicionSlide(number){
    muestraSlides(indice=number);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);


function muestraSlides(number){
    let i;
    let slides = document.getElementsByClassName('slider');
    let barras = document.getElementsByClassName('barra');

    if(number > slides.length){
        indice = 1;
    }
    if(number < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }
    
    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';
    
}
navbarActive();
muestraSlides(indice);