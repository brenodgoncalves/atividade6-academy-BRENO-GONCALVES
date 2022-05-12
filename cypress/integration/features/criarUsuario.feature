Feature: Listar usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar cadastro de novo usuário
        Given acessei a aplicação
        And acessei o cadastro de usuário

    Scenario: Cadastro de um novo usuário
        When incluo as informações de nome e email válidas do usuário
        |nome  |teste breno     |
        |email |breno@teste.gov |
        Then visualizo mensagem "Usuário salvo com sucesso" 

    Scenario: Cadastro de um novo usuário em branco
        When clico para salvar com os campos nome e email em branco
        Then visualizo abaixo do campo nome a mensagem "O campo nome é obrigatório"
        And visualizo abaixo do campo email a mensagem "O campo e-mail é obrigatório"

    Scenario: Cadastro de um novo usuário com email inválido
        When incluo as informações do usuário com email inválido
        |nome  |teste breno    |
        |email |breno@testegov |
        Then visualizo mensagem "Formato de e-mail inválido"

    Scenario: Cadastro de um usuário já existente
        When incluo as informações de um usuário já cadastrado
        |nome  |teste breno         |
        |email |breno@existente.gov |
        Then visualizo um modal informando "Este e-mail já é utilizado por outro usuário" 

    Scenario: Cadastro de um novo usuário excedendo o numero de caracteres
        When incluo as informações do usuário excedendo o número de caracteres permitidos
        |nome  |TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTestee |
        |email |testetestetestetestetestetestetestetestetestetesteteste@teste.gov                                     |
        Then visualizo abaixo do campo nome a mensagem "Informe no máximo 100 caracteres para o nome"
        And visualizo abaixo do campo email a mensagem "Informe no máximo 60 caracteres para o e-mail"