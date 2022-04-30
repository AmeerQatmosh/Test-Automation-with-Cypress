/// <reference types="cypress-xpath" />
/// <reference path="..\..\node_modules\cypress-xpath\src\index.d.ts" />

describe('cypress-xpath', () => {
    context('elements', ()=>{
    beforeEach(() =>{
        cy.visit('https://skillsmatch.mdx.ac.uk/en/')
        cy.xpath("//input[@id='username']").type('Test Automation')
        cy.xpath("//input[@id='password']").type('najah285@edu')
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
    })

    // Search feature 

    
    it('Search feature',()=>{
        cy.xpath("//a[normalize-space()='Search']").click()
        cy.xpath("//span[@role='textbox']").type('software')
        cy.xpath("//button[normalize-space()='Search']").click()
        cy.xpath("//div[@class='container']//div[1]//div[1]//h4[1]//a[1]").click()

    })
  })
})