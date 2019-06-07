describe('Data Times website', () => {
    beforeEach(function () {
        cy.visit('https://dev.thedatatimes.com/')

    })

    it('exist class worldBackground', () => {
        cy.visit('https://dev.thedatatimes.com/')
        cy.get('.worldBackground')
    })

    it('exist Data Times logo', () => {
        cy.get('[src="/img/logo.2a3c98c4.svg')
    })

    it('count rows(datasetInfo) and if text "Search 32 Data Sets for Open Data across"exist', () => {
        cy.get('.datasetInfo').should('have.length', 2)
            .contains('Search 32 Data Sets for Open Data across')

    })
    it('count rows(datasetInfo) and if text "50 Reliable Sources in one place" exist', () => {
        cy.get('.datasetInfo').should('have.length', 2)
            .contains('50 Reliable Sources in one place')

    })

    it('count rows(mostUsedTopicsLabel) and if text "Most used topics" exist', () => {
        cy.get('.mostUsedTopicsLabel').should('have.length', 1)
            .contains('Most used topics')

    })

    it('count rows(nav-item) and if text "How it works" exist', () => {
        cy.get('.nav-item').should('have.length', 5)
            .contains('How it works')

    })

    it('get rows(nav-item) and if text "About" exist', () => {
        cy.get('.nav-item').contains('About')

    })
    it('get rows(nav-item) and if text "Support" exist', () => {
        cy.get('.nav-item').contains('Support')

    })

    it('get rows(nav-item) and if text "Contact" exist', () => {
        cy.get('.nav-item').contains('Contact')

    })
    it('get rows(nav-item) and if text "0.12" exist', () => {
        cy.get('.nav-item').contains('0.12')

    })
    it('get rows(nav-item) and if text "Search Data Times" exist', () => {
        cy.get('.searchButtonLabel').contains('Search Data Times')

    })
    
    it('get search(tags-input-wrapper-default) and test if it works ', () => {
        cy.get('[type="text"]').type('Wales')
        cy.get('.searchButtonLabel').click()

    })

    it('count button(badge-primary) and if text "Communities"exist & works', () => {
        cy.get('.badge-primary').should('have.length', 5)
            .contains('Communities').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
        cy.get('.bg-transparent').contains('Go Home')
    })


    it('count button(badge-primary) and if text "Wales"exist & works', () => {
        cy.get('.badge-primary').should('have.length', 5)
            .contains('Wales').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
        cy.get('.bg-transparent').contains('Go Home')
    })


    it('count button(badge-primary) and if text "Council"exist & works', () => {
        cy.get('.badge-primary').should('have.length', 5)
            .contains('Council').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
        cy.get('.bg-transparent').contains('Go Home')
    })


    it('count button(badge-primary) and if text "Homelessness"exist & works', () => {
        cy.get('.badge-primary').should('have.length', 5)
            .contains('Homelessness').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
        cy.get('.bg-transparent').contains('Go Home')
        
    })


    it('count button(badge-primary) and if text "Household"exist & works and return', () => {
        cy.get('.badge-primary').should('have.length', 5)
            .contains('Household').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
        cy.get('.bg-transparent').contains('Go Home')
        
    })



}) 
