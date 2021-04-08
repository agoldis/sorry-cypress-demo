describe('Suite A', function () {
  it('Welcomes you with a very long name abc qeewre wer wer:', function () {
    cy.visit('/');
    cy.wait(1000);
    cy.contains('Gofffogle Search');
  });
});
