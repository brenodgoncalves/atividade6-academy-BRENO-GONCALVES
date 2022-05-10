class PageUsersNovo {
    formularioNome = "#name"
    formularioEmail = "#email"
    botaoSalvar = ".sc-iqcoie"

    cadastroValido (nome,email){
        cy.get(this.formularioNome).type(nome)
        cy.get(this.formularioEmail).type(email)
        cy.get(this.botaoSalvar).click()
    }
    
}

export var pageUsersNovo = new PageUsersNovo();