Feature: Remover usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessando a aplicação
        Given acessei a aplicação

    Scenario: Removendo usuário
        When pesquisei por um usuário pelo seu nome
        |nome  |testando |
        Then removo o usuário pela opção de excluir

    Scenario: Usuário inexistente
        When pesquisei por um usuário pelo email inexistente
        |email |teste@testando.gov.br |
        Then visualizo a mensagem "Ops! Não existe nenhum usuário para ser exibido"