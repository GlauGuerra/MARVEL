const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

// Chaves de autenticação para a API Marvel
const chavePublica = 'fe1943c5295eae8ae59ac3224110bc76';
const chavePrivada = '419d1042df25864aa282b9b7a9cf8e36a8f07f37';
const CryptoJS = require('crypto-js');

// Função para gerar a autenticação
function gerarAutenticacao() {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + chavePrivada + chavePublica).toString(CryptoJS.enc.Hex);
  return { ts, apikey: chavePublica, hash };
}

// Função para fazer a requisição à API Marvel
async function requestComics(endpoint, params = {}) {
  const auth = gerarAutenticacao();
  const url = `https://gateway.marvel.com/v1/public${endpoint}?ts=${auth.ts}&apikey=${auth.apikey}&hash=${auth.hash}`;
  const response = await axios.get(url, { params });
  return response.data;
}

// Cenário 1: Validar o total de quadrinhos retornados
Given('que eu tenha feito uma requisição para o endpoint de quadrinhos com um limite de 10', async function () {
  const response = await requestComics('/comics', { limit: 10 });
  this.response = response;
});

Then('o número total de quadrinhos retornados deve ser igual ao limite que foi solicitado', function () {
  const { limit, results } = this.response.data;
  assert.strictEqual(limit, 10, `O limite de quadrinhos ${limit} não corresponde ao valor solicitado`);
  assert.strictEqual(results.length, 10, `O número de quadrinhos retornados é ${results.length}, e não o limite de 10`);
});
