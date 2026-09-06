class CadastroPage {

//seletores
campoNome() {return cy.get('#name')}
campoEmail() {return cy.get('#email')}
campoTelefone() {return cy.get('#phone')}
campoSenha() {return cy.get('#password')}
campoConfirmaSenha() {return cy.get('#confirm-password')}
campoTermosCheck() {return cy.get('#terms-agreement')}
botaoCriarConta() {return cy.get('#register-btn')}


//metodo
 visitarPaginaCadastro () {
    cy.visit("register.html")
 }
visitarPaginaCatalogo() {
   cy.visit("catalog.html")
}
preencherCadastro(nome,email,telefone,senha,confirmaSenha) {
if(nome) this.campoNome().clear().type(nome)
this.campoEmail().clear().type(email)
this.campoTelefone().clear().type(telefone)
this.campoSenha().clear().type(senha,{log: false})
this.campoConfirmaSenha().clear().type(confirmaSenha,{log: false})
this.campoTermosCheck().check()
this.botaoCriarConta().click()
}
}
   export default new CadastroPage()