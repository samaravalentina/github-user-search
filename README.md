# 🔍 GitHub User Search

Aplicação web desenvolvida em React que permite buscar usuários do GitHub e exibir suas principais informações de forma elegante, rápida e responsiva.

---

## 🚀 Demonstração

👉 https://github-user-search-lime-nine.vercel.app/

---

## 🧠 Sobre o projeto

Este projeto foi desenvolvido com foco em **consumo de API REST**, **boas práticas de frontend** e **qualidade de software**, incluindo testes automatizados.

A aplicação permite que o usuário busque perfis do GitHub e visualize dados como:

* Foto de perfil
* Nome e username
* Bio
* Número de seguidores, seguindo e repositórios

Além disso, o sistema trata cenários importantes como:

* Campo vazio
* Usuário não encontrado
* Estado de carregamento (loading)

---

## 🛠 Tecnologias utilizadas

* React (Vite)
* JavaScript
* TailwindCSS
* Axios
* Cypress (Testes E2E)
* API pública do GitHub

---

## 🧪 Testes automatizados

Foram implementados testes E2E com Cypress para garantir a qualidade da aplicação.

### Cenários testados:

* ✅ Renderização dos elementos principais
* ✅ Validação de campo vazio
* ✅ Busca de usuário válido
* ✅ Tratamento de erro (usuário inexistente)
* ✅ Exibição de loading durante requisição

Os testes utilizam interceptação de requisições para garantir previsibilidade e estabilidade.

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/samaravalentina/github-user-search.git
```

### 2. Acesse a pasta

```bash
cd github-user-search
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Rode o projeto

```bash
npm run dev
```

---

## 🧪 Rodando os testes

### Cypress (modo interativo)

```bash
npx cypress open
```

### Cypress (modo headless)

```bash
npx cypress run
```

---

## 📁 Estrutura do projeto

```bash
src/
 ├── components/
 │   ├── SearchBar.jsx
 │   ├── ProfileCard.jsx
 │   ├── ErrorMessage.jsx
 │   ├── Loading.jsx
 │
 ├── services/
 │   └── githubApi.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de:

* Praticar integração com APIs REST
* Trabalhar com estados (loading, erro, sucesso)
* Aplicar boas práticas de frontend
* Implementar testes automatizados E2E
* Simular um cenário real de aplicação web

---

## 💼 Autor

Desenvolvido por **Samara Valentina**

* 💻 GitHub: https://github.com/samaravalentina
* 🌐 Portfólio: https://portfolio-lyart-three-axjsnx3y4u.vercel.app

---

## ⭐ Considerações finais

Este projeto representa não apenas uma aplicação funcional, mas também uma preocupação com qualidade, testes e experiência do usuário — pontos essenciais no desenvolvimento moderno.
