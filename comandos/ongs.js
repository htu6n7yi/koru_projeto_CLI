import chalk from 'chalk';

const ongs = [
  { nome: "Amigos do Bem", 
    site: "https://www.amigosdobem.org", 
    descricao: "Atua no sertão nordestino ajudando crianças e famílias." },

  { nome: "Instituto Ayrton Senna", 
    site: "https://institutoayrtonsenna.org.br", 
    descricao: "Promove educação de qualidade para jovens em todo o Brasil." },

  { nome: "Criança Esperança", 
    site: "https://criancaesperanca.globo.com", 
    descricao: "Ajuda projetos sociais voltados para crianças e adolescentes." },

  { nome: "TETO", 
    site: "https://www.techo.org/paises/brasil/", 
    descricao: "Constrói moradias emergenciais para famílias em situação de pobreza." },

  { nome: "Instituto Terra", 
    site: "https://institutoterra.org", 
    descricao: "Trabalha com a restauração ambiental e educação sustentável." }
];

ongs.forEach(ong => {
  console.log(chalk.bold.yellow("💛 ONG:"), chalk.white(ong.nome));
  console.log(chalk.bold.blue("🌐 Site:"), chalk.underline.blue(ong.site));
  console.log(chalk.bold.green("📝 Descrição:"), chalk.white(ong.descricao));
  console.log();
});
