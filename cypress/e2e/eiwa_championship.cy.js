describe('EIWA Championship Page', () => {
    it('should load the page and display the event title', () => {
      cy.visit('https://www.flowrestling.org/events/12932757-2025-eiwa-championship')
      cy.contains('2025 EIWA Championship')
    })
  })
  
  