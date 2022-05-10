Feature: Listar usuário
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Background: Acessar aplicação
        Given acessei a aplicação

    Scenario: Acesso à aplicação com usuários cadastrados
        Then visualizo as informações de todos os usuários cadastrados na aplicação

    Scenario: Acesso à aplicação sem usuários cadastrados
        Then visualizo uma opção para cadastrar um usuário na aplicação
        