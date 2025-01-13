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


 