describe('cypress-xpath', () => {
    context('elements', ()=>{
    beforeEach(() =>{
        cy.visit('https://skillsmatch.mdx.ac.uk/en/')
        cy.xpath("//input[@id='username']").type('Test Automation')
        cy.xpath("//input[@id='password']").type('najah285@edu', { sensitive: true })
        cy.xpath("//input[@value='Login']").click()
        })
    
    // Update my skills

    it('Update my skills',()=>{
        cy.xpath("//a[@href='/en/profile/']").click()
        cy.xpath("//a[@role='button'][normalize-space()='Update my skills']").click()

        cy.xpath("//a[normalize-space()='Start']").click()

        cy.xpath("//label[@for='6']").click()
        cy.xpath("//input[@test-data='NextStep']").click()

        cy.xpath("//label[@for='12']").click()
        cy.xpath("//label[@for='18']").click()
        cy.xpath("//label[@for='23']").click()
        cy.xpath("//label[@for='28']").click()
        cy.get('[style="display: block; opacity: 1;"] > .next').click()
          

        cy.xpath("//label[@for='33']").click()
        cy.xpath("//label[@for='38']").click()
        cy.xpath("//label[@for='43']").click()
        cy.get('[style="display: block; opacity: 1;"] > .next').click()

        cy.xpath("//label[@for='53']").click()
        cy.xpath("//label[@for='58']").click()
        cy.xpath("//label[@for='63']").click()
        cy.get('[style="display: block; opacity: 1;"] > .next').click()

        cy.xpath("//label[@for='67']").click()
        cy.xpath("//label[@for='70']").click()
        cy.xpath("//label[@for='77']").click()
        cy.get('[style="display: block; opacity: 1;"] > .next').click()

        cy.xpath("//label[@for='83']").click()
        cy.xpath("//label[@for='88']").click()
        cy.xpath("//label[@for='93']").click()       
        cy.get('[style="display: block; opacity: 1;"] > .next').click()

        cy.xpath("//label[@for='98']").click()
        cy.xpath("//label[@for='103']").click()        
        cy.xpath("//label[@for='106']").click()
        cy.xpath("//label[@for='113']").click()
        cy.xpath("//label[@for='118']").click()
        cy.get('[style="display: block; opacity: 1;"] > .next').click()

        cy.xpath("//label[@for='119']").click()
        cy.xpath("//label[@for='124']").click()
        cy.xpath("//label[@for='131']").click()
        cy.xpath("//input[@name='submit']").click()

        cy.get('[test-data="area_1"] > .row > .col-6 > label > span').invoke('text').should('contain', '(11/16)')
        cy.get('[test-data="area_2"] > .row > .col-6 > label > span').invoke('text').should('contain', '(12/12)')
        cy.get('[test-data="area_3"] > .row > .col-6 > label > span').invoke('text').should('contain', '(12/12)')
        cy.get('[test-data="area_4"] > .row > .col-6 > label > span').invoke('text').should('contain', '(7/12)')
        cy.get('[test-data="area_5"] > .row > .col-6 > label > span').invoke('text').should('contain', '(12/12)')
        cy.get('[test-data="area_6"] > .row > .col-6 > label > span').invoke('text').should('contain', '18/20)')


    })

    // Search feature 

    
    it('Direct Searching',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//span[@role='textbox']").type('software')
        cy.xpath("//button[normalize-space()='Search']").click()
        cy.get('[test-data="MatchedKeywords"]').invoke('text').should('contain', 'software')
      
    })

    it('Search in the title of the course ',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//span[@role='textbox']").type('Diploma in Information Technology')
        cy.xpath("//a[@class='collapsed card-link']").click()
        cy.xpath("//input[@id='search_in_title']").click()
        cy.xpath("//button[normalize-space()='Search']").click()
       })


     it('Search in the Case sensitive ',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//span[@role='textbox']").type('Technology')
        cy.xpath("//a[@class='collapsed card-link']").click()
        cy.xpath("//label[@for='case_sensitive']").click()
        cy.xpath("//button[normalize-space()='Search']").click()
        cy.get('[test-data="MatchedKeywords"]').invoke('text').should('contain', 'technology')
        })


    it('With all of the keywords ',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//span[@role='textbox']").type('Technology').type('{enter}').type('software').type('{enter}')
        cy.xpath("//a[@class='collapsed card-link']").click()
        cy.xpath("//label[@for='match_all']").click()
        cy.xpath("//button[normalize-space()='Search']").click()
        cy.get('[test-data="MatchedKeywords"]').invoke('text').should('contain', 'technology','software')
    })
    
    it('Search feature translate',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//a[@class='collapsed card-link']").click()
        cy.xpath("//select[@id='translateInput']").select(1)
        cy.xpath("//span[@role='textbox']").type('برمجيات')
        cy.xpath("//button[normalize-space()='Search']").click()
        cy.get('[test-data="MatchedKeywords"]').invoke('text').should('contain', 'software')

    })
    it('Search feature',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//span[@role='textbox']").type('software')
        cy.xpath("//button[normalize-space()='Search']").click()
        cy.get('[test-data="searchItem_1"]').find('[test-data="TotalMatches"]').invoke('text')
        .then((text)=>{ 
            var fullText = text;
            var pattern = /[0-9]+/g;
            var number = fullText.match(pattern);
            console.log(number);
            cy.xpath("//div[@class='container']//div[1]//div[1]//h4[1]//a[1]").click()
            cy.visit('https://skillsmatch.mdx.ac.uk/en/course/5795?keywords=software')
            // cy.xpath('/html/body/div[2]/div[1]/div[9]').should('contain','software').should('have.length.gte', number[0])
            // cy.get('.container>div').eq(8).should('contain','software').should('have.length', number[0])

            // cy.get('contains("software")').should('have.length.gte', number)

           })


        // cy.get('[test-data="searchItem_1"]').find('[test-data="TotalMatches"]').then(matches =>{

        //     cy.xpath("//div[@class='container']//div[1]//div[1]//h4[1]//a[1]").click()
        //     matches.get('contains("software")').should('have.length', 9)
            // cy.get('contains("software")').should('have.length', 9)

        // }); 

        // cy.get('#viewport').find('div[id=message]').then(message => {
        //     let wags = message;
        //     cy.wrap(wags).as('wags')
        //   });

        // cy.get('.container > :nth-child(9)').
        // cy.get('contains("software")').should('have.length', 9)
        
//check Sort based on user reviews
it('rating', () => {  
    cy.get('[id=username]').type('kev')
    cy.get('[id=password]').type('NnN82tpj9YR')
    cy.get('[value=Login]').click()   
//make sure that the rate for the course is sorted and have the right rate by comparing it Equal and Greater than
    cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span").type("planning");
    cy.get(".card-link").click({ force: true });
    cy.get('[test-data=sort_by_user_reviews]').click({ force: true })
    cy.get('[test-data=searchButton]').click({ force: true })
    cy.get("#search-result").click({ force: true })

    cy.get(['#search-result > div:nth-child(2) > div.ratingme.smallRate'])
        .its('length')
        .then((size) => {
            cy.get(['#search-result > div:nth-child(1) > div.ratingme.smallRate'])
                .its('length')
                .should('be.gte', size)
        })
})
})
})

})
