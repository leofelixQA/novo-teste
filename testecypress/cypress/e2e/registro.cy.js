import user from "../fixtures/usuario.json"


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

  it('deve fazer login usando importação de dados', () => {
    cy.loginAdmin(user.email, user.senha)
  });

  it('deve fazer login usando usuario padrao', () => {
    cy.loginAdmin(user.email2,user.senha2)
  });
})