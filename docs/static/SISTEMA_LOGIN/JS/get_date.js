function obterDiaEHora() {
     const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
     const dataAtual = new Date();
     const diaSemana = diasDaSemana[dataAtual.getDay()];
     const hora = formatarNumero(dataAtual.getHours()) + ":" + formatarNumero(dataAtual.getMinutes());

     return diaSemana + ", " + hora;
}
   
function formatarNumero(numero) {
     return numero.toString().padStart(2, "0");
}
   
function atualizarHora() {
     const elementoHora = document.getElementById("hora");
     elementoHora.textContent = obterDiaEHora();
}
   
window.onload = function() {
     atualizarHora();
     setInterval(atualizarHora, 60000); // Atualizar a cada 1 minuto (60000 milissegundos)
};