Feature: Verificação do endpoint de quadrinhos da Marvel

  Scenario: Confirmar o número total de quadrinhos retornados
    Given que eu tenha feito uma requisição para o endpoint de quadrinhos com um limite de 10
    Then o número total de quadrinhos retornados deve ser igual ao limite que foi solicitado
