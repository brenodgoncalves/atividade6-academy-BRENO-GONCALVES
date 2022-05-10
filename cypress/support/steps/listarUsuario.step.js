
import{ pageUsers } from "../../support/pages/pageUsers.po"

//Background: Acessar aplicação
Given("acessei a aplicação",() =>{
    pageUsers.visitar()
});

//Scenario: Acesso à aplicação com usuários cadastrados
Then("visualizo as informações de todos os usuários cadastrados na aplicação",()=>{
    pageUsers.mocandoUsuarioExistente()
    pageUsers.listaUsuarios()
});

//Scenario: Acesso à aplicação sem usuários cadastrados
Then("visualizo uma opção para cadastrar um usuário na aplicação",()=>{
    pageUsers.mocandoUsuarioInexistente()
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should('be.visible')
    cy.contains("Cadastre um novo usuário").should('be.visible')
});