import { mostrarPopUp } from './popup.js';
class Sistema_func
{
     constructor() {
         
     }
     
     redir_criar_usuario() 
     {
          mostrarPopUp("Redirecionando para a área de cadastro de usuários do sistema. Aguarde alguns instantes... ");
          setTimeout(function(){location.href="./cadastro.html"} , 500);
     }

     async company_get(){
         const response_ = await invoke("cadastros_empresa");
         const data_response_ = JSON.parse(response_);
         sessionStorage.setItem("company_data", JSON.stringify(data_response_.data[0]));
     } 


}
//url_entrar_ = "/";
//url_criar_ = "/cadastro.html";
const inst_sistema_func = new Sistema_func();

inst_sistema_func.company_get();


/*ENTRAR NO SISTEMA*/

/*CADASTRAR NOVO USUARIO*/ 
const cadastrar_novo_usuario = document.querySelector(".criar_usuario");
cadastrar_novo_usuario.addEventListener("click" ,()=> {
     inst_sistema_func.redir_criar_usuario();
})