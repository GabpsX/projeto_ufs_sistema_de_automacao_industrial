import { mostrarPopUp } from './popup.js';
async function login() {
     const username = document.querySelector(".user_").value;
     const password = document.querySelector(".pass_").value;
     
     try {
       const response = await invoke("login", { name: username, password: password });
       const data = JSON.parse(response);
       //console.log(data);
   
       if (data.success) {
         mostrarPopUp("Login bem-sucedido. Redirecionando para a área do dashboard...");
         sessionStorage.setItem("usuario", data.name);
         sessionStorage.setItem("token", data.token);
         sessionStorage.setItem("imagem_user", data.photo);
         setTimeout(function(){location.href="./dashboard.html"} , 600);
       } else {
         //console.log(data);
         mostrarPopUp("Usuário ou senha inválidos. Por favor, verifique suas credenciais.");

       }
     } catch (error) {
       //console.log(error);
       mostrarPopUp("Ocorreu um erro durante o processo de login. Por favor, tente novamente em alguns instantes ...");
    
     }
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o comportamento padrão de reset do formulário

  // Execute sua função de login aqui
  login();
});
