function t(element) {
     const msgElement = document.querySelector(".texto");
     let index = 0;

     const interval = setInterval(() => {
          if (index < element.length) {
               msgElement.textContent += element[index];
               index++;
          } else {
               clearInterval(interval);
          }
     }, 40);
}

const msg = "Carregando Funcionalidades!";
t(msg);


setTimeout(() => {
     const div = document.querySelector('.animation_load');
     div.parentNode.removeChild(div);
}, 1400); /* tempo em milissegundos */
   