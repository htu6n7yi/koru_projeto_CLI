# 💖 DoaBem CLI

Uma CLI solidária feita com Node.js, APIs públicas e muito amor 🥹💻  
Divulga iniciativas reais de doação, apoio a crianças com doenças graves, ONGs confiáveis e projetos sociais.

## 🚀 Como usar

1. Clone este repositório  
2. Instale as dependências com `npm install`  
3. Crie um arquivo `.env` com suas chaves de API:

```
NEWS_API_KEY=sua-chave-da-newsapi
GOOGLE_BOOKS_API_KEY=sua-chave-do-google-books
GITHUB_TOKEN=opcional
```

4. Execute no terminal com:

```bash
node ./bin/index.js <comando>
```

Exemplo:

```bash
node ./bin/index.js noticias
```

---

## 🎥 Demonstração



https://github.com/user-attachments/assets/dad905f2-9cf4-40f6-81ff-a1dfa23a1b01

---

## 📦 Comandos disponíveis

- `doabem noticias` → Mostra notícias sobre doações infantis e doenças raras (via NewsAPI)  
- `doabem ongs` → Lista ONGs confiáveis (JSON fixo)  
- `doabem projetos` → Mostra projetos sociais no GitHub (via GitHub API)  
- `doabem livros` → Sugere livros sobre superação e inclusão (via Google Books API)  
- `doabem pais brasil` → Mostra dados do Brasil + link da UNICEF (via REST Countries API)  
- `doabem ajuda` → Mostra os comandos disponíveis com estilo (chalk + figlet)  
- `doabem verificar` → Dicas para doar com segurança (texto fixo)

---

## 🗂️ Estrutura do Projeto

```
doabem-cli/
├── bin/
│   └── index.js           ← Entrada principal da CLI
├── comandos/
│   ├── noticias.js
│   ├── ongs.js
│   ├── projetos.js
│   ├── livros.js
│   ├── pais.js
│   ├── ajuda.js
│   ├── verificar.js
├── utils/
│   └── fetchHelper.js     ← Função genérica de fetch
├── .env                   ← Chaves das APIs
├── package.json
├── README.md
```

---

## 👥 Integrantes e Contribuições

Este projeto foi desenvolvido em grupo como parte dos desafios propostos pela tutora **Luara Kerlen**, com foco na construção de uma **CLI colaborativa** com Node.js.

### 🤝 Organização do Projeto

- **Carlos José** ([CarlosJSilvaDev](https://github.com/CarlosJSilvaDev))  
  - Responsável pelo repositório  
  - Organização, convites, versionamento no GitHub

- **Renata Rocha** ([RenataARocha](https://github.com/RenataARocha))  
  - Estruturação e redação do README.md  
  - Apoio na padronização dos comandos

---

### 💬 Comandos da CLI

#### 🔹 `doabem noticias`
- **Carlos Cavalcanti** ([CarlosJSilvaDev](https://github.com/CarlosJSilvaDev))  
  - Integração com a NewsAPI  
  - Termos de busca aleatórios sobre solidariedade  
  - Exibição formatada no terminal

#### 🔹 `doabem ongs`
- **Letícia Capeletto** ([leticiacapeletto](https://github.com/leticiacapeletto))  
  - JSON estático com ONGs confiáveis  
  - Exibição clara e acessível

#### 🔹 `doabem projetos`
- **Renata Rocha** ([RenataARocha](https://github.com/RenataARocha))  
  - Integração com a GitHub API  
  - Busca de projetos sociais com link e descrição

#### 🔹 `doabem livros`
- **Ian Borges** ([borgesip](https://github.com/borgesip))  
  - Uso da Google Books API  
  - Sugestão de livros inspiradores com título, autor e link

#### 🔹 `doabem pais brasil`
- **Ângelo Paixão** ([angelogpaixao](https://github.com/angelogpaixao))  
  - Uso da REST Countries API  
  - Dados do Brasil + link oficial da UNICEF

#### 🔹 `doabem ajuda`
- **Josué Pereira** ([josuepsantos](https://github.com/josuepsantos))  
  - Comando de ajuda estilizado com chalk e figlet  
  - Lista de comandos explicados

#### 🔹 `doabem verificar`
- **Maira Alves** ([Maira-Alves](https://github.com/Maira-Alves))  
  - Texto com dicas práticas para doar com segurança  
  - Foco na prevenção de golpes

#### 🔹 Integração Geral
- **Ana Paula** ([dantaspereiraana](https://github.com/dantaspereiraana))  
  - Criação do `index.js` principal  
  - Integração dos comandos, testes finais  
  - Empacotamento e publicação opcional

---

## 🛠️ Tecnologias Usadas

- Node.js
- Fetch API com async/await
- dotenv
- chalk
- figlet
- APIs públicas (NewsAPI, Google Books, GitHub API, REST Countries)

---

## 🧪 Requisitos Atendidos

- ✅ Node.js + terminal  
- ✅ API pública externa  
- ✅ Fetch com async/await  
- ✅ process.argv para comandos  
- ✅ Terminal formatado com chalk/figlet  
- ✅ Projeto colaborativo com GitHub  
- ✅ (Opcional) Empacotável via NPM

---

## ✨ Inspirado por

Este projeto foi inspirado no espírito de **solidariedade através da tecnologia**.  
A ideia é usar código para ajudar quem mais precisa.  
Porque quem desenvolve com propósito... **desenvolve melhor. 💖**

---

> _"Quando a gente compartilha conhecimento, a gente também compartilha cuidado."_  
> — Todo mundo do DoaBem CLI
