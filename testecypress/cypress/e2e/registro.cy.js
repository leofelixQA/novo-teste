import user from "../fixtures/login.json"


describe('template spec', () => {

  beforeEach(() => {
    cy.visit('login.html')
  });
  it('deve fazer login com sucesso', () => {
    cy.get('#email').type("admin@biblioteca.com")
    cy.get('#password').type("admin123")
    cy.get('#login-btn').click()
  })

  it('deve fazer login com comando customizado', () => {
    cy.loginAdmin("admin@biblioteca.com", "admin123")
  });

  it.only('deve fazer login usando importação de dados', () => {
    cy.login(user.email,user.senha)
  });
})