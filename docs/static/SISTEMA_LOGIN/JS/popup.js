export function mostrarPopUp(mensagem) {
     var popUp = document.getElementById("popUp");
     popUp.style.display = "block";
   
     var barraProgresso = document.querySelector(".barra-progresso");
     barraProgresso.style.width = "0%";
     let popup_mensagem = mensagem;
     const pop = document.querySelector(".pop-mensagem").innerHTML = popup_mensagem;
     setTimeout(function () {
       barraProgresso.style.width = "100%";
     }, 10);
   
     setTimeout(function () {
       popUp.style.display = "none";
       barraProgresso.style.width = "0%";
     }, 2000);
   }  
