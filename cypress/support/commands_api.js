// Chaves de autenticação.


const chavePublica = 'fe1943c5295eae8ae59ac3224110bc76';
const chavePrivada = '419d1042df25864aa282b9b7a9cf8e36a8f07f37';
const CryptoJS = require('crypto-js');


function gerarAutenticacao() {
  
  const ts = Date.now().toString();
  
  const hash = CryptoJS.MD5(ts + chavePrivada + chavePublica).toString(CryptoJS.enc.Hex);
  
  return { ts, apikey: chavePublica, hash };
}


Cypress.Commands.add('requestComics', (endpoint, options = {}) => {

  const auth = gerarAutenticacao();

  const url = `https://gateway.marvel.com/v1/public${endpoint}?ts=${auth.ts}&apikey=${auth.apikey}&hash=${auth.hash}`;

  
  return cy.request({

    method: options.method || 'GET', 
    url: url,                         
    ...options,     
                      
  });
});
