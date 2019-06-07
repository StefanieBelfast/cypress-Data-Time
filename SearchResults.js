describe('Data Times website SearchResults', () => {
    beforeEach(function () {
        cy.visit('https://dev.thedatatimes.com/')
        cy.get('[type="text"]').type('Household')
        cy.get('.tags-input-typeahead-item-highlighted-default').click()
        cy.get('.searchButtonLabel').click({ force: true })
            .wait(4000)

    })


    it('exits Logo(providerLogo)', () => {
        cy.get('.providerLogo').should('have', 2)
    })

    it('exits button(exploreButton) und if it work', () => {
        cy.get('.card-body').contains('Explore Data').click()
    })
    it('exits button(communities) and if it works', () => {
        cy.get('.flexItem-3').contains('Communities').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
    })
    it('exits button(Household) and if it works', () => {
        cy.get('.flexItem-3').contains('Household').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
    })
    it('exits the dropdown and if it works', () => {
        cy.get('#sort').select('Descending', { force: true })
    })
    it('count the results', () => {
        cy.get('.title').contains('Your Results Total Found 2')
    })
    it('exist the background in the top(container-fluid)', () => {
        cy.get('.container-fluid')
    })
    it('exist Data Times logo', () => {
        cy.get('[src="/img/logo.2a3c98c4.svg')
    })
    it('count rows(datasetInfo) and if text "Search for topics in over 32 Data Sets"exist', () => {
        cy.get('.datasetInfo').should('have.length', 1).contains('Search for topics in over 32 Data Sets')
    })
    it('count rows(nav-item) and if text "How it works" exist', () => {
        cy.get('.nav-item').should('have.length', 5).contains('How it works')
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
    it('get left box(card-header) and if text "Organizations" exist', () => {
        cy.get('.card-header').should('have.length', 2).contains('Organizations')
    })
    it('get left box(card-header) and if text "Sources" exist', () => {
        cy.get('.card-header').contains('Sources')
    })
    it('get left box(card) and if text "department-for-communities-and-local-government" exist', () => {
        cy.get('.card').contains('department-for-communities-and-local-government')
    })
    it('get left box(card) and if text "london-borough-of-hounslow" exist', () => {
        cy.get('.card').contains('london-borough-of-hounslow')
    })
    it('get left box(card) and if checkbox works', () => {
        cy.get('.centerCheckbox').should('have.length', 2)
        cy.get('#london-borough-of-hounslow').click()
        cy.get('.title').contains('Your Results Total Found 1')
        cy.get('#london-borough-of-hounslow').click()
    })





})
