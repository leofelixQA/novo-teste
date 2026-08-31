import cadastroPage from "../support/pages/cadastro-page"

describe('funcionalidade: cadastro', () => {
    beforeEach(() => {
        cy.visit("register.html")
    });
    it.only('deve fazer cadastro com  sucesso', () => {

        cadastroPage.preencherCadastro("nardo","teste@teste.com","11922345678","teste123","teste123")
    });
});