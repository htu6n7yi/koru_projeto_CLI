import dotenv from 'dotenv';
dotenv.config();
import https from 'https';

const palavraChave = "solidariedade";
const urlPath = `/search/repositories?q=${encodeURIComponent(palavraChave)}&sort=stars&order=desc&per_page=5`;

const options = {
    hostname: 'api.github.com',
    method: 'GET',
    headers: {
        "User-Agent": "DoaBem CLI",
        Accept: "application/vnd.github+json",
    }
};

function mostrarProjetos() {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        console.error("❌ Erro: Token do GitHub não encontrado. Configure a variável de ambiente GITHUB_TOKEN.");
        return;  // ou process.exit(1) se quiser parar só aqui
    }

    options.headers.Authorization = `Bearer ${token}`;
    options.path = urlPath;

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

export default mostrarProjetos;
