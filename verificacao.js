const chalk = require("chalk");
const readline = require("readline-sync");
const { cnpj } = require("cpf-cnpj-validator");

console.log(chalk.bgRed.white.bold("🚨 ALERTA DE SEGURANÇA PARA DOAÇÕES 🚨\n"));

// Dica 1: Verificação de CNPJ
console.log(chalk.yellow("💡 Dica 1: Verifique o CNPJ da ONG antes de doar."));
const cnpjInput = readline.question("Digite o CNPJ da ONG: ");

if (cnpj.isValid(cnpjInput)) {
  console.log(chalk.green("✅ CNPJ válido!"));
} else {
  console.log(chalk.red("❌ CNPJ inválido. Verifique antes de prosseguir."));
}

// Dica 2: Verificação de link suspeito
console.log("\n" + chalk.yellow("💡 Dica 2: Desconfie de links suspeitos."));
const linkInput = readline.question("Cole o link que você recebeu: ");

const linkSuspeito = !linkInput.startsWith("https://") || linkInput.includes("bit.ly") || linkInput.includes("tinyurl");

if (linkSuspeito) {
  console.log(chalk.red("⚠️ Esse link parece suspeito. Prefira acessar diretamente o site da ONG."));
} else {
  console.log(chalk.green("🔗 O link parece seguro, mas ainda é melhor confirmar no site oficial."));
}

// Dica 3: Reforço sobre site oficial
console.log("\n" + chalk.yellow("💡 Dica 3: Doe diretamente pelo site oficial da ONG."));
console.log(chalk.blue("🌐 Evite intermediários desconhecidos e confirme sempre o endereço do site.\n"));

console.log(chalk.bgGreen.white.bold("✅ Fique seguro e ajude com responsabilidade!"));
