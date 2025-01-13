<<<<<<< HEAD
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

=======
**Testes de API Marvel com cucumber**


**Introdução**


Este repositório tem testes automatizados para checar se o endpoint de histórias em quadrinhos da Marvel está funcionando corretamente. Usando Cucumber e Node.js; Os testes seguem a ideia do (BDD). Eles utilizam a API pública da Marvel para confirmar que os quadrinhos voltam conforme um limite de 10 itens.  

**Freameworks e Ferramentas** 

- Cucumber freamework para escrever e rodar os testes.
- Node.js ambiente de execução para JavaScript.
- Axios Biblioteca para fazer requisição HTTP.
- Gherkin linguagem usada para descrever os testes.

**Pré-requisitos**

- Node.js (use a versão mais nova)
- Git (caso você precise clonar o repositório)
- Chaves da API da Marvel (público e privado)


Como Rodar os Testes

1. **Clonar Repositório**

- git clone https://seu-repositorio.git

- cd seu-repositorio

2. **Instalar Dependências**

- Clone o repositório e instale as dependências:

npm install

3. **Configurar as chaves Marvel**
 
 É necessário autenticar as chaves na (https://developer.marvel.com/)
Depois de gerar as chaves, adicione ao seu arquivo .env

- MARVEL_PUBLIC_KEY=sua-chave-publica
- MARVEL_PRIVATE_KEY=sua-chave-privad

4. **Rodar os Testes** 

- npx cucumber-js

5. **Estrutura de Arquivos**

FEATURES/                     
    comics.feature           // Cenários BDD;
    api.feature

STEPS/
    comics.steps.js          // Definição dos passos dos testes; 
    api.steps.js

node_modules/              // Bibliotecas instaladas;
package.json              //  Arquivo de dependências e configurações do projeto
.env                     //  Arquivo com as variáveis de ambiente 


 
>>>>>>> a343bc886fff34bd95c6b8caaaaa075d978a6386
