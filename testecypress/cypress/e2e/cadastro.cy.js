import { faker } from '@faker-js/faker';
import cadastro from "../support/pages/cadastro-page"
describe('Funcionalidade :cadastro', () => {
    beforeEach(() => {
        cadastro.visitarPaginaCadastro()
    });
    it('deve fazer cadastro com sucesso', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.phone.number()
        cadastro.preencherCadastro(nome, email, telefone, senha, senha)
        cy.get('#user-name').should("contain",nome)
        cy.url().should("contain","dashboard")
    });
});