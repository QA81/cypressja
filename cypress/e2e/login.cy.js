/// <reference types="Cypress" />

describe("login tests",()=>{
    it("login with invalid email",()=>{
        cy.visit("/")
        cy.get("a[href='/login']").click()
        cy.get('#password').type('123456789');
        cy.get('button').click();
        cy.url().should('contain','/login')
    })

    it("login with empty email field",()=>{
        cy.visit("/")
        cy.get("a[href='/login']").click()
        cy.get('#password').type('123456789');
        cy.get('button').click();
        cy.url().should('contain','/login')
    })
    it("login with unregister user",()=>{
        cy.visit("/")
        cy.get("a[href='/login']").click()
        cy.get('#email').type('random@email.com')
        cy.get('#password').type('123456789');
        cy.get('button').click();
    })
    it("login with valid credentials",()=>{
        cy.visit("/");
       cy.get("a[href='/login']").click();
    //    cy.get('.nav-link').eq(1).click();
       cy.get('#email').type('vlada@mail.com');
       cy.get('#password').type('123456789');
       cy.get('button').click();
       cy.url().should('not.contain','/login')
       cy.get('.nav-link').eq(3).click()
       cy.url().should('contain','/login')
    })
    

})
