const https = require("https");

const chaveAPI = "68ae735bbad64528ba15ac3c4279d829";

const pesquisar = ["doações", "crianças com doenças raras", "solidariedade"];

const keyword = pesquisar[Math.floor(Math.random() * pesquisar.length)];

const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
  keyword
)}&language=pt`;

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${chaveAPI}`,
    "User-Agent": "NodeJS NewsApp (https://seu-site-ou-github.com)",
  },
};

console.log(`🔍 Buscando notícias sobre: "${keyword}"...\n`);

https
  .get(url, options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const json = JSON.parse(data);

        if (json.status === "ok" && json.articles && json.articles.length > 0) {
          console.log(`✅ Notícias encontradas sobre "${keyword}":`);
          json.articles.slice(0, 5).forEach((article, index) => {
            console.log(`\n${index + 1}. ${article.title}`);
            console.log(`Fonte: ${article.source.name}`);
            console.log(`Link: ${article.url}`);
          });
        } else {
          console.log(`❌ Nenhuma notícia encontrada ou erro na API.`);
          console.log("Detalhes:", json.message || "Sem mensagem.");
        }
      } catch (error) {
        console.error("Erro ao processar JSON:", error);
      }
    });
  })
  .on("error", (err) => {
    console.error("Erro na requisição:", err.message);
  });
