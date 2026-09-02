import catalogo from "../support/pages/cadastro-page"

describe('Funcionalidade: tabela', () => {
    beforeEach(() => {
        catalogo.visitarPaginaCatalogo()
    });
    it('deve pesquisar pelo livro 1984', () => {
        cy.get('#search-input').type("1984")
    });
});