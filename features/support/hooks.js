const { Before, After } = require('@cucumber/cucumber');

// Antes de cada teste, podemos inicializar algum valor ou variável
Before(function () {
  this.response = null;
  this.antManComicIds = [];
  this.comicDetails = [];
});

// Após cada teste, podemos limpar ou resetar variáveis
After(function () {
  this.response = null;
  this.antManComicIds = [];
  this.comicDetails = [];
});
