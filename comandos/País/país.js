// /comandos/pais.js

const fetch = require('node-fetch');
const chalk = require('chalk');

async function mostrarInfoBrasil() {
  try {
    // Busca dados do Brasil na API REST Countries
    const resposta = await fetch('https://restcountries.com/v3.1/name/brazil');
    const dados = await resposta.json();
    const brasil = dados[0];

    const nomeOficial = brasil.name.official;
    const populacao = brasil.population;
    const area = brasil.area;

    // Exibe informações no terminal
    console.log(`${chalk.blue('🌎 País:')} ${chalk.whiteBright(nomeOficial)}`);
    console.log(`${chalk.magenta('👥 População:')} ${chalk.whiteBright((populacao / 1_000_000).toFixed(1))} milhões`);
    console.log(`${chalk.green('📐 Área:')} ${chalk.whiteBright(area.toLocaleString())} km²`);
    console.log(
      `${chalk.yellow('🎗 Apoie crianças brasileiras na UNICEF →')} ${chalk.underline('https://www.unicef.org/brazil')}`
    );

  } catch (erro) {
    console.error(chalk.red('Erro ao buscar informações do país:'), erro.message);
  }
}

module.exports = mostrarInfoBrasil;

// mostrarInfoBrasil(); Função que retorna as informações