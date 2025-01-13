describe('Validar endpoint de histórias em quadrinhos', () => {

  beforeEach(() => {
    
    cy.requestComics('/comics', { qs: { limit: 10 } }).as('response');

  });

  it('Deve retornar o total de registros igual ao valor do campo limit', () => {

    cy.get('@response').then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body.data.limit).to.eq(10); 
      expect(response.body.data.results.length).to.eq(10); 


    });
  });
});
