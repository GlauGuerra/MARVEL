describe('Validar histórias em quadrinhos com o título "Ant-Man"', () => {
  let idsAntMan = [];
  
    before(() => {
      
      cy.requestComics('/comics', { qs: { limit: 100 } }).as('response');

    });
  

    it('Deve retornar as histórias em quadrinhos com o título "Ant-Man"', () => {

      cy.get('@response').then((response) => {
        expect(response.status).to.eq(200);
  
         const antManComics = response.body.data.results.filter(comic => comic.title.includes("Ant-Man"));
  
        
        antManComics.forEach(comic => {
          idsAntMan.push(comic.id);

        });
                              
                   expect(antManComics.length).to.be.greaterThan(0);
      cy.log(`IDs encontrados: ${idsAntMan}`);

      });
    });
  
    it('Deve retornar os detalhes de cada quadrinho de "Ant-Man"', () => {
        idsAntMan.forEach((id) => {
          
          cy.requestComics(`/comics/${id}`).as('comicDetail');
          cy.get('@comicDetail').then((response) => {
            
            expect(response.status).to.eq(200);
      
             const comic = response.body.data.results[0];
      
            expect(comic.title).to.include("Ant-Man", `Título esperado não encontrado no quadrinho com ID: ${id}`);
            expect(comic.creators.items.length).to.be.greaterThan(
              0,
              `Nenhum criador encontrado para o quadrinho com ID: ${id}`

            );
          });
     });
   });
 });
  

describe('Validar as histórias em quadrinhos do Ant-Man', () => {
 let idsAntMan = []; 

      
    it('Deve retornar todas as histórias em quadrinho e salvar os IDs com o título "Ant-Man"', () => {


        cy.requestComics('/comics', { qs: { limit: 100 } }).as('comicsList'); 
        cy.get('@comicsList').then((response) => {

            expect(response.status).to.eq(200); 
  
             const antManComics = response.body.data.results.filter((comic) => comic.title.includes('Ant-Man'));
          
            expect(antManComics.length).to.be.greaterThan(0); 
  
             idsAntMan = antManComics.map((comic) => comic.id);
  
      
            expect(idsAntMan.length).to.be.greaterThan(0); 
          
        cy.log('IDs das histórias de Ant-Man:', idsAntMan);

      });
    });
  });
  

  describe('Validação de histórias em quadrinhos por ID', () => {
    let antManComicIds = []; 
   
    before(() => {
      cy.requestComics('/comics', { qs: { limit: 100 } }).then((response) => {
       
        expect(response.status).to.eq(200);
  
        
        antManComicIds = response.body.data.results
          .filter((comic) => comic.title.includes('Ant-Man')) 
          .map((comic) => comic.id); 
  
       
        expect(antManComicIds.length).to.be.greaterThan(0, 'Nenhum título "Ant-Man" encontrado.');
      });
    });
  
    
    it('Deve verificar os detalhes de cada história em quadrinhos por ID', () => {
      
      antManComicIds.forEach((id) => {
        cy.requestComics(`/comics/${id}`).then((response) => {
       
          expect(response.status).to.eq(200);
  
           const comic = response.body.data.results[0];
  
          expect(comic).to.exist;
          expect(comic.title).to.include('Ant-Man', 'Título não corresponde ao esperado.');
          expect(comic.creators.items.length).to.be.greaterThan(0, 'Nenhum criador associado encontrado.');
  
                 
            
          });
          
        });
      });
    });
  