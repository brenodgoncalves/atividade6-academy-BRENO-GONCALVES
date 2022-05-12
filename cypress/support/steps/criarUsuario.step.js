import{ pageUsers } from "../../support/pages/pageUsers.po"
import{ pageUsersNovo } from "../../support/pages/pageUsersNovo.po"
import{ pageDetalhes } from "../../support/pages/pageDetalhes.po"

//Background: Acessar cadastro de novo usuário
Given("acessei a aplicação", () =>{
    pageUsers.visitar()
});

And("acessei o cadastro de usuário", () =>{
    pageUsers.cadastrarUsuarioNovo()
});

//Scenario: Cadastro de um novo usuário
When("incluo as informações de nome e email válidas do usuário", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsersNovo.mocandoCadastroUsuario()
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email)
});

Then("visualizo mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    pageDetalhes.clicarVoltar()
});

//Scenario: Cadastro de um novo usuário em branco
When("clico para salvar com os campos nome e email em branco", () =>{
    cy.get(pageUsersNovo.botaoSalvar).click()
});

Then("visualizo abaixo do campo nome a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
});

And("visualizo abaixo do campo email a mensagem {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    pageDetalhes.clicarVoltar()
});

//Scenario: Cadastro de um novo usuário com email inválido
When("incluo as informações do usuário com email inválido", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email)
});

//Scenario: Cadastro de um usuário já existente
When("incluo as informações de um usuário já cadastrado", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsersNovo.mocandoCadastroExistente()
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email)
});

Then("visualizo um modal informando {string}", (mensagem) =>{
    cy.contains(mensagem).should('be.visible')
    cy.contains("Cancelar").click()
    pageDetalhes.clicarVoltar()
});

//Scenario: Cadastro de um novo usuário excedendo o numero de caracteres
When("incluo as informações do usuário excedendo o número de caracteres permitidos", (tabela) =>{
    var dadosTabela = tabela.rowsHash()
    pageUsersNovo.cadastroValido(dadosTabela.nome,dadosTabela.email)
});