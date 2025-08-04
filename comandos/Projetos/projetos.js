require('dotenv').config();
const https = require('https');


if (!process.env.GITHUB_TOKEN) {
    console.error("❌ Erro: Token do GitHub não encontrado. Configure a variável de ambiente GITHUB_TOKEN.");
    process.exit(1); 
}

const token = process.env.GITHUB_TOKEN;
const palavraChave = "solidariedade";
const urlPath = `/search/repositories?q=${encodeURIComponent(palavraChave)}&sort=stars&order=desc&per_page=5`;

const options = {
    hostname: 'api.github.com',
    path: urlPath,
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "DoaBem CLI",
        Accept: "application/vnd.github+json",
    }
};

function mostrarProjetos() {
    console.log(`🔍 Buscando projetos relacionados a "${palavraChave}" no GitHub...\n`);

    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const json = JSON.parse(data);

                if (json.items && json.items.length > 0) {
                    console.log("📁 Projetos encontrados:");
                    json.items.forEach((repo, index) => {
                        console.log(`\n${index + 1}. ${repo.full_name}`);
                        console.log(`📝 ${repo.description || "Sem descrição"}`);
                        console.log(`🔗 ${repo.html_url}`);
                    });
                } else {
                    console.log("❌ Nenhum projeto encontrado.");
                }
            } catch (err) {
                console.error("Erro ao processar resposta:", err.message);
            }
        });
    });

    req.on('error', (err) => {
        console.error("Erro na requisição:", err.message);
    });

    req.end();
}

if (require.main === module) {
    mostrarProjetos();
} else {
    module.exports = mostrarProjetos;
}

