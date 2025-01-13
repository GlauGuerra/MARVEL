const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');
const CryptoJS = require('crypto-js');

// Definições para acessar a API da Marvel
const chavePublica = 'fe1943c5295eae8ae59ac3224110bc76';
const chavePrivada = '419d1042df25864aa282b9b7a9cf8e36a8f07f37';

// Função que cria os parâmetros necessários para autenticação
function gerarCredenciais() {
  const timestamp = Date.now().toString();
  const hash = CryptoJS.MD5(timestamp + chavePrivada + chavePublica).toString(CryptoJS.enc.Hex);
  return { ts: timestamp, apikey: chavePublica, hash };
}

// Função que executa a requisição à API
async function fazerRequisicao(endpoint, parametros = {}) {
  const credenciais = gerarCredenciais();
  const url = `https://gateway.marvel.com/v1/public${endpoint}?ts=${credenciais.ts}&apikey=${credenciais.apikey}&hash=${credenciais.hash}`;
  const resposta = await axios.get(url, { params: parametros });
  return resposta.data;
}

// Passo 1: Buscando quadrinhos com um limite de 10 resultados
Given('que eu faço uma requisição para o endpoint de quadrinhos com limite de 10', async function () {
  const resposta = await fazerRequisicao('/comics', { limit: 10 });
  this.resposta = resposta;
});

// Passo 2: Verificando se a quantidade de quadrinhos retornados é igual ao limite solicitado
Then('o total de registros retornados deve ser igual ao limite', function () {
  const { limit, results } = this.resposta.data;
  assert.strictEqual(limit, 10, 'O número de quadrinhos deve ser 10');
  assert.strictEqual(results.length, 10, 'O número de quadrinhos retornados deve ser igual ao limite de 10');
});

// Passo 3: Verificando os detalhes dos quadrinhos, como título e criadores
When('eu verifico os detalhes de cada quadrinho', async function () {
  this.detalhesQuadrinhos = [];
  for (let id of this.antManComicIds) {
    const resposta = await fazerRequisicao(`/comics/${id}`);
    this.detalhesQuadrinhos.push(resposta.data.results[0]);
  }
});
