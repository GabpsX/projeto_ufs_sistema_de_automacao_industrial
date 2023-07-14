
import { mostrarPopUp } from './popup.js';
async function obterInformacoesHardware() {
     try {
       const hardware_armazenado = await invoke('getHardware');
       const verifica_hadware = await invoke('get_ac_sistema');
       const hardware = JSON.parse(verifica_hadware).data.c;
       console.log(hardware, typeof(hardware));
       console.log(hardware_armazenado, typeof(hardware_armazenado)); 
       if (hardware_armazenado === hardware) {
          //console.log("Hardware verificado!")
          mostrarPopUp("Verificando Licença!");
       }
       else {
          mostrarPopUp("Insira uma licença válida!");
          //console.log("O hardware não é o mesmo. Reative o software!");
       }
     } catch (error) {
       mostrarPopUp("Insira uma licença!");
       console.error('Erro ao obter informações de hardware:', error);
     }
   }

obterInformacoesHardware();