class PageDetalhes{
    identificadorUnico = "input[name='id']"
    formularioNome = "#userName"
    formularioEmail ="#userEmail"

    visualizarDetalhes(){
        cy.get(this.identificadorUnico).should('be.visible')
        cy.get(this.formularioNome).should('be.visible')
        cy.get(this.formularioEmail).should('be.visible')
    }

    atualizarUsuario(nome,email){
        cy.contains("[type='button']","Editar").click()
        cy.get(this.formularioNome).type('{selectAll}'+nome)
        cy.get(this.formularioEmail).type('{selectAll}'+email)
        cy.contains("[type='submit']","Salvar").click()
    }

    clicarVoltar(){
        cy.contains(".sc-gsnTZi","Voltar").click()
    }

    mocandoUsuarioDetalhes(){
        cy.intercept("GET","https://crud-api-academy.herokuapp.com/api/v1/users/47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",{
                statusCode: 200,
                body: {
                    id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                    name:"breno teste",
                    email:"breno@teste.gov",
                    createdAt:"2022-05-10T19:46:49.891Z",
                    updatedAt:"2022-05-10T21:43:49.457Z"
                }
            });
        }
}

export var pageDetalhes = new PageDetalhes()