Feature: Verificação e validação das histórias em quadrinhos

  Scenario: Confirmar o total de quadrinhos retornados
    Given que eu faça uma requisição para o endpoint de quadrinhos com um limite de 10 resultados
    Then o número total de quadrinhos que retornou deve ser igual ao limite que eu defini

  Scenario: Validar os detalhes dos quadrinhos do personagem "Ant-Man"
    Given que eu busquei as histórias em quadrinhos relacionadas ao personagem "Ant-Man"
    When eu confira os detalhes de cada quadrinho retornado
    Then eu devo encontrar o título "Ant-Man" e confirmar que cada quadrinho tem os criadores associados
