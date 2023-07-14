function verificarLarguraTela() {
     try {
          var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

          const bt_equipamentos = document.querySelector(".equipamentos");
          const bt_automacao = document.querySelector(".automacao");
          const bt_calculos = document.querySelector(".calculos_");
     
          if (larguraTela < 1200) {
               bt_equipamentos.innerText = "Equipamentos";
               bt_automacao.innerText = "Automação";
               bt_calculos.innerText = "Cálculos";
          } else {
               bt_equipamentos.innerText = "Equipamentos Pertinentes ao Protótipo";
               bt_automacao.innerText = "Instrumentos necessários para Automação";
               bt_calculos.innerText = "Cálculos";
          }
     } catch (error) {
          console.log("elemento não encontrado!")
     }

     }
     verificarLarguraTela();
     window.addEventListener('resize', verificarLarguraTela);



const load = document.querySelector(".load");
const loader = document.querySelector(".loader");

function loader_start() {
setInterval(() => {
load.classList.remove("load");
loader.classList.remove("loader");

}, 1500);
}
loader_start();



class Redir {
constructor() {
//pass
}
time_to_reload(url) {
     load.classList.add("load");
     loader.classList.add("loader");
setInterval(() => {
     load.classList.remove("load");
     loader.classList.remove("loader");
     window.location.href = url;
}, 1500);
}
}

const cl_instance = new Redir();
const btn_home = document.querySelector(".btn_home").addEventListener("click", () => {
     cl_instance.time_to_reload("index.html");
});
const btn_model_3d = document.querySelector(".btn_model_3d").addEventListener("click", () => {
     cl_instance.time_to_reload("index2.html");
});
const projeto_completo = document.querySelector(".projeto_completo").addEventListener("click", () => {
     cl_instance.time_to_reload("projeto_completo.html");
})

const login_area = document.querySelector(".login_area").addEventListener("click", () => {
     cl_instance.time_to_reload("login.html");
})

