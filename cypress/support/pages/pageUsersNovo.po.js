class PageUsersNovo {
    formularioNome = "#name"
    formularioEmail = "#email"
    botaoSalvar = ".sc-iqcoie"

    cadastroValido (nome,email){
        cy.get(this.formularioNome).type(nome)
        cy.get(this.formularioEmail).type(email)
        cy.get(this.botaoSalvar).click()
    }

    mocandoCadastroUsuario(){
        cy.intercept("POST","https://crud-api-academy.herokuapp.com/api/v1/users",
        {
                statusCode: 201,
                body: {
                    id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                    name:"teste breno",
                    email:"breno@teste.gov",
                    createdAt:"2022-05-10T19:46:49.891Z",
                    updatedAt:"2022-05-10T21:43:49.457Z"
                }
            });
        }

    mocandoCadastroExistente(){
        cy.intercept("POST","https://crud-api-academy.herokuapp.com/api/v1/users",
        {
                statusCode: 422,
                body: {
                    id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                    name:"teste breno",
                    email:"breno@existente.gov",
                    createdAt:"2022-05-10T19:46:49.891Z",
                    updatedAt:"2022-05-10T21:43:49.457Z"
                }
            });
        }
    
    mocandoUsuarioAtualizacao(){
        cy.intercept("PUT","https://crud-api-academy.herokuapp.com/api/v1/users/47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
        {
                statusCode: 200,
                body: {
                    id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                    name:"testando",
                    email:"teste@testando.gov.br",
                    createdAt:"2022-05-10T19:46:49.891Z",
                    updatedAt:"2022-05-10T21:43:49.457Z"
                }
            });
        }

    mocandoUsuarioAtualizacaoExistente(){
        cy.intercept("PUT","https://crud-api-academy.herokuapp.com/api/v1/users/47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
        {
                statusCode: 422,
                body: {
                    id:"47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",
                    name:"testando",
                    email:"breno@existente.com",
                    createdAt:"2022-05-10T19:46:49.891Z",
                    updatedAt:"2022-05-10T21:43:49.457Z"
                }
            });
        }

    mocandoDeleteUsuario(){
        cy.intercept("DELETE","https://crud-api-academy.herokuapp.com/api/v1/users/47e7ebaa-ad55-4ba6-94d0-256ac4a10c99",{
                statusCode: 204,
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

export var pageUsersNovo = new PageUsersNovo();