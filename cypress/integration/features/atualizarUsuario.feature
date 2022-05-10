Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar cadastro de novo usuário
        Given acessei a aplicação
    
    Scenario: Localizando usuário pelo email
        When pesquisei por um usuário pelo seu email
        |email |breno@teste.gov |
        When acesso o detalhes do usuário pesquisado
        Then visualizo todas as suas informações

    Scenario: Usuário inexistente
        When pesquisei por um usuário pelo seu nome
        |nome  |teste breno inexistente |
        Then visualizo a mensagem "Ops! Não existe nenhum usuário para ser exibido"

    Scenario: Atualizando dados do usuário
        When pesquisei por um usuário pelo seu email
        |email |breno@teste.gov |
        And acesso o detalhes do usuário pesquisado
        And alterei o nome e o email do usuário por um inexistente
        |nome  |testando              |
        |email |teste@testando.gov.br |
        Then visualizo a mensagem "Informações atualizadas com sucesso"
    
    Scenario: Atualizando dados do usuário com email inválido
        When pesquisei por um usuário pelo seu email
        |email |teste@testando.gov.br |
        And acesso o detalhes do usuário pesquisado
        And alterei o email do usuário por um email invalido
        |email |teste@testando |
        Then visualizo a mensagem abaixo do campo email "Formato de e-mail inválido"

    Scenario: Atualizando dados do usuário para um email já existente
        When pesquisei por um usuário pelo seu email
        |email |teste@testando.gov.br |
        And acesso o detalhes do usuário pesquisado
        And alterei o email do usuário por um email ja existente de outro usuário
        |email |b@g.com |
        Then visualizo um modal com a mensagem "Este e-mail já é utilizado por outro usuário"

    Scenario: Atualizando dados do usuário excedendo o numero de caracteres
        When pesquisei por um usuário pelo seu email
        |email |teste@testando.gov.br |
        And acesso o detalhes do usuário pesquisado
        And alterei o nome e o email do usuário excedendo o numero de caracteres permitidos
        |nome  |TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTestee |
        |email |testetestetestetestetestetestetestetestetestetesteteste@teste.gov                                     |
        Then visualizo a mensagem abaixo do campo nome "Informe no máximo 100 caracteres para o nome"
        And visualizo a mensagem abaixo do campo email "Informe no máximo 60 caracteres para o e-mail"