
import{ pageUsers } from "../../support/pages/pageUsers.po"
import{ mockando } from "../../support/pages/mocks.po"

//Background: Acessar aplicação
Given("acessei a aplicação",() =>{
    pageUsers.visitar()
});

//Scenario: Acesso à aplicação com usuários cadastrados
Then("visualizo as informações de todos os usuários cadastrados na aplicação",()=>{
    mockando.mockandoUsuarioExistente()
    pageUsers.listaUsuarios()
});

//Scenario: Acesso à aplicação sem usuários cadastrados
Then("visualizo uma opção para cadastrar um usuário na aplicação",()=>{
    mockando.mockandoUsuarioInexistente()
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should('be.visible')
    cy.contains("Cadastre um novo usuário").should('be.visible')
});