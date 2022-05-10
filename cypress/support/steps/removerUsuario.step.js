import{ pageUsers } from "../../support/pages/pageUsers.po"

//Background: Acessar cadastro de novo usuário
Given("acessei a aplicação", ()=>{
    pageUsers.visitar()
    pageUsers.mocandoUsuarioExistente()
});

//Scenario: Removendo usuário
When("pesquisei por um usuário pelo seu nome", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.nome)
});

Then("removo o usuário pela opção de excluir", ()=>{
    pageUsers.removendoUsuario()
});

//Scenario: Usuário inexistente
When("pesquisei por um usuário pelo email inexistente", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

Then("visualizo a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
});