describe('Data Times website SearchResults', () => {
    beforeEach(function () {
        cy.visit('https://dev.thedatatimes.com/')
        cy.get('[type="text"]').type('Household')
        cy.get('.tags-input-typeahead-item-highlighted-default').click()
        cy.get('.searchButtonLabel').click({ force: true })
            .wait(4000)
    })
    it('exists Logo(providerLogo)', () => {
        cy.get('.providerLogo').should('have', 2)
    })
    it('exists button(exploreButton) und  if it works', () => {
        cy.get('.card-body').contains('Explore Data').click()
    })
    it('exists button(communities) and if it works', () => {
        cy.get('.flexItem-3').contains('Communities').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
    })
    it('exists button(Household) and  if it works', () => {
        cy.get('.flexItem-3').contains('Household').click()
        cy.get('.text-black').contains('404')
        cy.get('.text-grey-darker').contains('Sorry, the page you are looking for could not be found.')
    })
    it('exists the dropdown and if it works', () => {
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
    it('count rows(datasetInfo) and  exist text "Search for topics in over 32 Data Sets"', () => {
        cy.get('.datasetInfo').should('have.length', 1).contains('Search for topics in over 32 Data Sets')
    })
    it('count rows(nav-item) and exist text "How it works"', () => {
        cy.get('.nav-item').should('have.length', 5).contains('How it works')
    })
    it('get rows(nav-item) and exist text "About"', () => {
        cy.get('.nav-item').contains('About')
    })
    it('get rows(nav-item) and exist text "Support"', () => {
        cy.get('.nav-item').contains('Support')
    })
    it('get rows(nav-item) and exist text "Contact"', () => {
        cy.get('.nav-item').contains('Contact')
    })
    it('get rows(nav-item) and exist text "0.12" exist', () => {
        cy.get('.nav-item').contains('0.12')
    })
    it('get rows(nav-item) and exist text "Search Data Times" ', () => {
        cy.get('.searchButtonLabel').contains('Search Data Times')
    })
    it('get left box(card-header) and exist text "Organizations"', () => {
        cy.get('.card-header').should('have.length', 2).contains('Organizations')
    })
    it('get left box(card-header) and exist text "Sources"', () => {
        cy.get('.card-header').contains('Sources')
    })
    it('get left box(card) and exist text "department-for-communities-and-local-government"', () => {
        cy.get('.card').contains('department-for-communities-and-local-government')
    })
    it('get left box(card) and exist text "london-borough-of-hounslow"', () => {
        cy.get('.card').contains('london-borough-of-hounslow')
    })
    it('get left box(card) and exist checkbox works', () => {
        cy.get('.centerCheckbox').should('have.length', 2)
        cy.get('#london-borough-of-hounslow').click()
        cy.get('.title').contains('Your Results Total Found 1')
        cy.get('#london-borough-of-hounslow').click()
    })

})
