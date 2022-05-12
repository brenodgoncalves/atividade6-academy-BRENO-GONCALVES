class PageUsers{
    campoPesquisa = ".sc-gKXOVf"
    botaoNovo = ".sc-gsnTZi"
    listaDeUsuarios = "#listaUsuarios"
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
        cy.get(this.listaDeUsuarios).should('exist')
        cy.get(this.cardUsuarios).should('exist')
        cy.contains("p","Nome:").should('be.visible')
        cy.contains("p","E-mail:").should('be.visible')
        cy.get(this.botaoRemover).should('exist')
        cy.get(this.botaoDetalhes).should('exist')
    }

    acessoDetalhes(){
        cy.get(this.botaoDetalhes).click()
    }

    removendoUsuario(){
        cy.get(this.botaoRemover).click()
        cy.contains("Confirmar").click()
        cy.contains("Usuário removido!").click()
    }
}

export var pageUsers = new PageUsers();