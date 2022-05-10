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
}

export var pageDetalhes = new PageDetalhes()