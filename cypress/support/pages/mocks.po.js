class Mocks{
mockandoUsuarioExistente(){
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

mockandoUsuarioInexistente(){
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users",
    []);
}

mockandoUsuarioPesquisa(){
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

mockandoUsuarioPesquisaAlterado(){
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

mockandoCadastroUsuario(){
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

mockandoCadastroExistente(){
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

mockandoUsuarioAtualizacao(){
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

mockandoUsuarioAtualizacaoExistente(){
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

mockandoDeleteUsuario(){
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

    mockandoUsuarioDetalhes(){
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

export var mockando = new Mocks()