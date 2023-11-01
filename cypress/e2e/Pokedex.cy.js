describe('Pokedex', function() {

  const url = 'http://localhost:5000'

  it('front page can be opened', function() {
    cy.visit(url)
    cy.contains(/ivysaur/i)
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('opens pokemon clicked on', function () {
    cy.visit(url)
    cy.contains(/ivysaur/i).click()
    cy.contains(/chlorophyll/i)
    cy.contains(/overgrow/i)
  })
})