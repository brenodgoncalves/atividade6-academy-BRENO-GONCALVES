class PageUsers{
    campoPesquisa = ".sc-gKXOVf"
    botaoNovo = ".sc-gsnTZi"
    cardUsuarios = "#userData"
    botaoDetalhes = "#userDataDetalhe"
    botaoRemover = ".sc-kgflAQ"
    
    visitar(){
        cy.visit("https://academy-crud-frontend.herokuapp.com/");
    }

    buscarUsuarioEmail(email) {
        cy.get(this.campoPesquisa).type(email);
    }

    buscarUsuarioNome(nome) {
        cy.get(this.campoPesquisa).type(nome);
    }

    cadastrarUsuarioNovo(){
        cy.get(this.botaoNovo).click();
    }

    listaUsuarios(){
        cy.get(this.cardUsuarios).should('exist');
    }

    acessoDetalhes(){
        cy.get(this.botaoDetalhes).click();
    }

    removendoUsuario(){
        cy.get(this.botaoRemover).click();
        cy.contains("Confirmar").click();
        cy.contains("Usuário removido!").click();
    }

    mocandoUsuarioExistente(){
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users",
        [{
            id:"13f0e960-89ac-410c-bc76-defaa5875b3a",
            name:"teste breno",
            email:"breno@teste.gov",
            createdAt:"2022-05-08T06:04:15.760Z",
            updatedAt:"2022-05-08T06:04:15.760Z"
        }]);
    }

    mocandoUsuarioInexistente(){
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users",
        []);
    }
}

export var pageUsers = new PageUsers();