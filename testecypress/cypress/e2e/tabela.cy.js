import catalogo from "../support/pages/cadastro-page"

describe('Funcionalidade: tabela', () => {
    beforeEach(() => {
        catalogo.visitarPaginaCatalogo()
    });
    it('deve pesquisar pelo livro 1984', () => {
        cy.get('#search-input').type("1984")
    });
    
    it('deve buscar todos os livros do catalogo', () => {
        cy.fixture("livros").then((catalog) =>{
        catalog.forEach(book =>{
             cy.get('#search-input').clear().type(book.livro)
        })
        })
    });

    it.only('deve fazer a busca por categoria', () => {
        cy.fixture("livros").then((catalog2) =>{
            catalog2.forEach(item =>{
                 cy.get('#search-input').clear().type(item.livro)
            })
        })
    });
});