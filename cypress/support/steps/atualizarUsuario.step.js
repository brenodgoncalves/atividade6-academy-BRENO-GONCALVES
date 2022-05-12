import{ pageUsers } from "../../support/pages/pageUsers.po"
import{ pageDetalhes } from "../../support/pages/pageDetalhes.po"
import{ mockando } from "../../support/pages/mocks.po"

//Background: Acessar cadastro de novo usuário
Given("acessei a aplicação", ()=>{
    mockando.mockandoUsuarioPesquisa()
    mockando.mockandoUsuarioPesquisaAlterado()
    mockando.mockandoUsuarioDetalhes()
    
    pageUsers.visitar()
});

//Scenario: Localizando usuário pelo email
When("pesquisei por um usuário pelo seu email", (tabela) =>{    
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.email)
});

And("acesso o detalhes do usuário", () =>{    
    pageUsers.acessoDetalhes()
});

Then("visualizo todas as suas informações", () =>{
    pageDetalhes.visualizarDetalhes()
    pageDetalhes.clicarVoltar()
});

//Scenario: Usuário inexistente
When("pesquisei por um usuário pelo seu nome", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsers.buscarUsuarioEmail(dadosTabela.nome)
});

Then("visualizo a mensagem informando {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    cy.get(".sc-iBkjds").should('be.visible').click()
});

//Atualizando dados do usuário
And("alterei o nome e o email do usuário por um inexistente", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    mockando.mockandoUsuarioAtualizacao()
    pageDetalhes.atualizarUsuario(dadosTabela.nome,dadosTabela.email)
});

Then("visualizo a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
});

//Scenario: Atualizando dados do usuário com email inválido
And("alterei o email do usuário por um email invalido", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageDetalhes.atualizarUsuario('',dadosTabela.email)
});

Then("visualizo a mensagem abaixo do campo email {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    cy.contains(".sc-iqcoie","Cancelar").click()
    pageDetalhes.clicarVoltar()
});

//Scenario: Atualizando dados do usuário para um email já existente
And("alterei o email do usuário por um email ja existente de outro usuário", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    mockando.mockandoUsuarioAtualizacaoExistente()
    pageDetalhes.atualizarUsuario('',dadosTabela.email)
});

Then("visualizo um modal com a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    cy.contains(".sc-iTONeN","Cancelar").click()
    cy.contains(".sc-iqcoie","Cancelar").click()
    pageDetalhes.clicarVoltar()
});

//Scenario: Atualizando dados do usuário excedendo o numero de caracteres
And("alterei o nome e o email do usuário excedendo o numero de caracteres permitidos", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageDetalhes.atualizarUsuario(dadosTabela.nome,dadosTabela.email)
});

Then("visualizo a mensagem abaixo do campo nome {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
});