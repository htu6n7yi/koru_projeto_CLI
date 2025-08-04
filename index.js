import mostrarAjuda from "./comandos/Ajuda/ajuda.js";
import buscarNoticias from "./comandos/noticias/noticias.js";
import listarOngs from "./comandos/Ong/ongs.js";
import mostrarInfoBrasil from "./comandos/País/país.js";
/* import mostrarProjetos from "./comandos/Projetos/projetos.js"; */

const args = process.argv.slice(2);
const comando = args[0];

switch (comando) {
  case 'ajuda':
    mostrarAjuda();
    break;
  case 'noticias':
    buscarNoticias();
    break;
  case 'ongs':
    listarOngs();
    break;
  case 'país':
    mostrarInfoBrasil();
    break;
  case 'projetos':
    /* mostrarProjetos(); */
    break;
  default:
    console.log("Comando não reconhecido. Use 'ajuda' para ver a lista de comandos.");
    mostrarAjuda();
    break;
}