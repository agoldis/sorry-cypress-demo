describe('Suite B', function () {
  xit('Welcomes you', function () {
    cy.visit('/');
    cy.wait(1000);
    cy.contains('Google Search');
  });
  it('Welcomes you', function () {
    cy.visit('/');
    cy.wait(1000);
    cy.contains('Google Search');
  });
});
