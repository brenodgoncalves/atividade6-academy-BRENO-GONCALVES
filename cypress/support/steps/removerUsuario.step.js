import{ pageUsers } from "../../support/pages/pageUsers.po"
import{ mockando } from "../../support/pages/mocks.po"

//Background: Acessar cadastro de novo usuário
Given("acessei a aplicação", ()=>{
    pageUsers.visitar()
    mockando.mockandoDeleteUsuario()
});

//Scenario: Removendo usuário
When("pesquisei por um usuário pelo email", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

Then("removo o usuário pela opção de excluir", ()=>{
    pageUsers.removendoUsuario()
});

//Scenario: Usuário inexistente
When("pesquisei por um usuário pelo nome inexistente", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.nome)
});

Then("visualizo a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
});