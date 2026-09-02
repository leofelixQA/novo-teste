import cadastroPage from "../support/pages/cadastro-page"
import { faker } from '@faker-js/faker';
describe('funcionalidade: cadastro', () => {
    beforeEach(() => {
        cy.visit("register.html")
    });
    it.only('deve fazer cadastro com  sucesso', () => {
       let email = faker.internet.email()
        cadastroPage.preencherCadastro("nardo",email,"11922345678","teste123","teste123")
    });
});