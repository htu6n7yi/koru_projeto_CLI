// /comandos/ajuda.js
import figlet from 'figlet';
import chalk from 'chalk';

function mostrarAjuda() {
  // Logo estilizado
  console.log(
    chalk.magenta(
      figlet.textSync('DoaBem CLI', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    )
  );

  console.log(chalk.bold('\n💜 Bem-vindo ao DoaBem CLI!\n'));

  //Baseado nas partes desenvolvidas pelos colegas, com possibilidade de avançar o projeto, utilizando esse menu para acessar as demais pesquisas.
  console.log(chalk.cyan('📌 Comandos disponíveis:\n'));
  console.log(chalk.yellow('- ') + chalk.green('doabem projetos') + chalk.white(' → Projetos voltados para solidariedade no GitHub'));
  console.log(chalk.yellow('- ') + chalk.green('doabem livros') + chalk.white(' → Livros inspiradores'));
  console.log(chalk.yellow('- ') + chalk.green('doabem ongs') + chalk.white(' → Brasil e informações relevantes'));
  console.log(chalk.yellow('- ') + chalk.green('doabem noticias') + chalk.white(' → Últimas notícias de doações'));
  console.log(chalk.yellow('- ') + chalk.green('doabem ongs') + chalk.white(' → ONGs confiáveis para apoiar'));
  console.log(chalk.gray('- Finalizar a pesquisa'));
}

export default mostrarAjuda;
