describe('Suite B', function () {
  for (let i = 0; i < 15; i++) {
    it(`Welcomes you ${i} times`, function () {
      cy.visit('/');
      cy.wait(1000);
      cy.contains('Google Search');
    });
  }
});
