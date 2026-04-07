describe("Busca de Usuários no GitHub", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("deve renderizar os elementos principais da página", () => {
    cy.contains("Buscar Usuário no GitHub").should("be.visible");
    cy.get('[data-cy="search-input"]').should("be.visible");
    cy.get('[data-cy="search-button"]').should("be.visible");
  });

  it("deve mostrar mensagem ao tentar buscar com campo vazio", () => {
    cy.get('[data-cy="search-button"]').click();

    cy.get('[data-cy="error-message"]')
      .should("be.visible")
      .and("contain", "Digite um usuário para realizar a busca.");
  });

  it("deve buscar um usuário válido com sucesso", () => {
    cy.intercept("GET", "https://api.github.com/users/samaravalentina", {
      statusCode: 200,
      body: {
        login: "samaravalentina",
        name: "Samara Valentina",
        avatar_url: "https://github.com/images/error/samaravalentina_happy.gif",
        bio: "Desenvolvedora apaixonada por tecnologia e inovação.",
        followers: 100,
        following: 5,
        public_repos: 8,
        html_url: "https://github.com/samaravalentina",
      },
    }).as("getUser");

    cy.get('[data-cy="search-input"]').type("samaravalentina");
    cy.get('[data-cy="search-button"]').click();

    cy.wait("@getUser");

    cy.get('[data-cy="profile-card"]').should("be.visible");
    cy.get('[data-cy="profile-name"]').should("contain", "Samara Valentina");
    cy.get('[data-cy="profile-login"]').should("contain", "@samaravalentina");
  });

  it("deve mostrar erro ao buscar usuário inexistente", () => {
    cy.intercept("GET", "https://api.github.com/users/usuarioinexistente123456789", {
      statusCode: 404,
      body: {
        message: "Not Found",
      },
    }).as("getUserNotFound");

    cy.get('[data-cy="search-input"]').type("usuarioinexistente123456789");
    cy.get('[data-cy="search-button"]').click();

    cy.wait("@getUserNotFound");

    cy.get('[data-cy="error-message"]')
      .should("be.visible")
      .and("contain", "Usuário não encontrado");
  });

  it("deve mostrar loading durante a busca", () => {
    cy.intercept("GET", "https://api.github.com/users/samaravalentina", {
      delay: 1000,
      statusCode: 200,
      body: {
        login: "samaravalentina",
        name: "Samara Valentina",
        avatar_url: "https://avatars.githubusercontent.com/u/226354702?s=400&u=8d70faae35d1eb4bc769dd5733a5ea581f217f9b&v=4",
        bio: "Desenvolvedora apaixonada por tecnologia e inovação.",
        followers: 5,
        following: 7,
        public_repos: 13,
        html_url: "https://github.com/samaravalentina",
      },
    }).as("getUser");

    cy.get('[data-cy="search-input"]').type("samaravalentina");
    cy.get('[data-cy="search-button"]').click();

    cy.contains("Buscando...").should("exist");

    cy.wait("@getUser");

    cy.get('[data-cy="profile-card"]').should("be.visible");
  });
});