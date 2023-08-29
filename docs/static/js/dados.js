function downloadImage(url) {
  const link = document.createElement('a');
  link.href = url;
  link.download = 'image.jpg'; // Nome do arquivo que será baixado
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const downloadButton = document.querySelector('.baixar_diagrama_pfd');
const imageUrl = 'https://gabpsx.github.io/projeto_ufs_sistema_de_automacao_industrial/static/build%20offline/pid.png'; 

downloadButton.addEventListener('click', () => {
  console.log("executando!");
  downloadImage(imageUrl + '?raw=true');
});