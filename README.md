MARVEL API TEST







- Pré-requisitos:
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:


- Node.js (versão 16 ou superior)
- Docker e Docker Compose
- Acesso à API pública da Marvel (você precisará de uma chave pública e privada)
- Estrutura do Projeto


O projeto está organizado da seguinte forma:

cypress/e2e/api: Contém os arquivos de teste (parte1.cy.js e parte2.cy.js).

cypress/support: Inclui os comandos personalizados (commands_api.js) e arquivos de suporte.

Dockerfile: Configuração do ambiente Docker para execução dos testes.

docker-compose.yml: Gerenciamento de serviços usando Docker Compose.

cypress.config.js: Configurações principais do Cypress.




1. Configuração 

  - Clonar repositorio:

  git clone <url-do-repositorio>
  cd marvel-cypress

2. Instale dependências:

  npm install


3. Configure as chaves da API Marvel:

- No arquivo commands_api.js, substitua os valores das variáveis chavePublica e chavePrivada pelas suas credenciais da API Marvel.

4. Executar os testes com Docker (recomendado):

- Certifique-se de que o Docker e o Docker Compose estão instalados.
- Construa a imagem e execute o container:

 docker-compose up --build


5. Executar os testes localmente:

 npx cypress open




 TESTES IMPLEMENTADOS: 


Parte 1
Testes gerais para validar a API de histórias em quadrinhos, como:

 - Retorno correto de informações básicas.
 - Validação do total de registros.
 
Parte 2
Testes mais detalhados:

- Validação de histórias em quadrinhos com o título "Ant-Man".
- Validação de detalhes retornados para cada ID.

Padrões e Boas Práticas:

- Os testes estão organizados e seguem boas práticas de automação.
- Comandos personalizados foram criados para facilitar a reutilização.
- Evitei valores "hard-coded" e priorizei o uso de variáveis e funções dinâmicas.

