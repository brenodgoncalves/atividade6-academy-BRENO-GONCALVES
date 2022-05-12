class PageUsers{
    campoPesquisa = ".sc-gKXOVf"
    botaoNovo = ".sc-gsnTZi"
    cardUsuarios = "#userData"
    botaoDetalhes = "#userDataDetalhe"
    botaoRemover = ".sc-kgflAQ"
    
    visitar(){
        cy.visit("https://academy-crud-frontend.herokuapp.com/")
    }

    buscarUsuarioEmail(email) {
        cy.get(this.campoPesquisa).type(email)
    }

    buscarUsuarioNome(nome) {
        cy.get(this.campoPesquisa).type(nome)
    }

    cadastrarUsuarioNovo(){
        cy.get(this.botaoNovo).click()
    }

    listaUsuarios(){
        cy.get(this.cardUsuarios).should('exist')
    }

    acessoDetalhes(){
        cy.get(this.botaoDetalhes).click()
    }

    removendoUsuario(){
        cy.get(this.botaoRemover).click()
        cy.contains("Confirmar").click()
        cy.contains("Usuário removido!").click()
    }

    mocandoUsuarioExistente(){
        cy.intercept("GET","https://crud-api-academy.herokuapp.com/api/v1/users",{
            statusCode: 200,
            body: [{
                id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                name:"breno teste",
                email:"breno@teste.gov",
                createdAt:"2022-05-10T19:46:49.891Z",
                updatedAt:"2022-05-10T21:43:49.457Z"
            }]
        });
    }

    mocandoUsuarioInexistente(){
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users",
        []);
    }

    mocandoUsuarioPesquisa(){
        cy.intercept("GET","https://crud-api-academy.herokuapp.com/api/v1/search?value=breno@teste.gov",{
            statusCode: 200,
            body: [{
                id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                name:"breno teste",
                email:"breno@teste.gov",
                createdAt:"2022-05-10T19:46:49.891Z",
                updatedAt:"2022-05-10T21:43:49.457Z"
            }]
        });
    }
    
    mocandoUsuarioPesquisaAlterado(){
        cy.intercept("GET","https://crud-api-academy.herokuapp.com/api/v1/search?value=teste@testando.gov.br",{
            statusCode: 200,
            body: [{
                id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                name:"testando",
                email:"teste@testando.gov.br",
                createdAt:"2022-05-10T19:46:49.891Z",
                updatedAt:"2022-05-10T21:43:49.457Z"
            }]
        });
    }
}

export var pageUsers = new PageUsers();