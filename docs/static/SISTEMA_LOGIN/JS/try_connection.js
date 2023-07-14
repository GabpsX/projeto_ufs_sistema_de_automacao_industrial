function verificarConexao() {
     const wifiIcon = document.querySelector(".fa-wifi");
     const horaElemento = document.getElementById("hora");
   
     if (navigator.onLine) {
       // Acesso permitido, a conexão com a internet está disponível
       wifiIcon.style.color = "white";
       wifiIcon.classList.remove("fa-beat-fade");
       horaElemento.textContent = obterDiaEHora();
       console.log("Conexão com a internet disponível");
     } else {
       // Bloquear acesso, não há conexão com a internet
       wifiIcon.style.color = "hotpink";
       wifiIcon.classList.add("fa-beat-fade");
       horaElemento.textContent = "Sem conexão com a Internet";
       console.log("Sem conexão com a internet");
     }
}
   
window.onload = function() {
     verificarConexao();
     setInterval(verificarConexao, 60000); // Verificar a cada 1 minuto (60000 milissegundos)
};