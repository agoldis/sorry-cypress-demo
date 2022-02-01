describe('Suite C', function () {
  for (let i = 0; i < 10; i++) {
    it(`Welcomes you ${i} times`, function () {
      cy.visit('/');
      cy.wait(1000);
      cy.contains('This should fail');
    });

    it(
        `Shows 404 ${i} times`,
        {
          retries: 3,
        },
        function () {
          cy.visit('/non-existing', {
            failOnStatusCode: false,
          });
          cy.contains('405');
        }
    );
  }
});
