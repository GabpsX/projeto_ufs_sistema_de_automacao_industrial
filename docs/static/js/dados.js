async function downloadImageUsingFetch(url) {
  try {
    let url_download;
    let url_type;
    switch(url){
      case "pfd":
        url_download = "https://raw.githubusercontent.com/GabpsX/projeto_ufs_sistema_de_automacao_industrial/main/docs/static/build%20offline/PFDdownload.png";
        url_type = 'pfd.jpg';
        show_popup("Preparando o Download...PFD");
        break
      case "pid":
        url_download = "https://raw.githubusercontent.com/GabpsX/projeto_ufs_sistema_de_automacao_industrial/main/docs/static/build%20offline/PIDdownload.png";
        url_type = 'pid.jpg';
        show_popup("Preparando o Download...P&ID");
        break
      case "movel":
        url_download = "";
        url_type = 'SistemaAutprodapApp.apk';
        show_popup("Preparando o Download...APK");
        break
      case "simul":
        url_type = 'projeto3D.glb';
        url_download = "https://github.com/GabpsX/projeto_ufs_sistema_de_automacao_industrial/raw/main/docs/model3D/projetcompleto.glb";
        show_popup("Preparando o Download...3D");
      default:
        break
    }
    const response = await fetch(url_download);
    const blob = await response.blob();

    // Criação do link temporário
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = url_type; 
    document.body.appendChild(link);
    link.click();

    // Limpeza após o download
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    //console.log('Download concluído com sucesso!');
    show_popup("Download concluído com sucesso!");
  } catch (error) {
    show_popup("Preparando o Download...3D");
    show_popup('Ocorreu um erro ao tentar realizar a ação: ' + error.toString());
    console.error('Ocorreu um erro ao tentar realizar a ação:', error);
  }
}




const bt_downalods = document.querySelectorAll(".baixar_diagrama_pfd, .baixar_diagrama_pid, .baixar_movel, .baixar_simulacao");
bt_downalods.forEach((bt_target) => {
  bt_target.addEventListener("click", () => {
    const atributo = bt_target.getAttribute('data-name')
    downloadImageUsingFetch(atributo);
  });
});


function show_popup(value) {
  const showpop = document.querySelector(".showpop");
  showpop.style.transform = "scale(1)";

  const mensagem = document.querySelector(".mensagem");
  mensagem.innerText = value;
  if(value.includes("Ocorreu um erro")){
    mensagem.style.color = "Red";
  }
  else {
    mensagem.style.color = "Green";
  }

  setTimeout(() => {
    showpop.style.transform = "scale(0)";
  }, 2500)
}