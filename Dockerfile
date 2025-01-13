# Usando uma imagem oficial do Cypress com Node.js
FROM cypress/included:10.3.0

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos do projeto para dentro do container
COPY . .

# Instalar as dependências do projeto
RUN npm install

# Caso precise rodar algum servidor, expõe a porta 3000
EXPOSE 3000

# Comando para rodar os testes Cypress
CMD ["npx", "cypress", "run"]
