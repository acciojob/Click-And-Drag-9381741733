// Your code here.
describe('Drag and Drop Test', () => {
  it('should drag and drop an item within the grid', () => {
    cy.visit('http://localhost:3000'); // Replace with your server's URL

    // Select the first cube and perform drag-and-drop
    cy.get('.items').eq(0)
      .trigger('mousedown', { which: 1, pageX: 100, pageY: 100 })
      .trigger('mousemove', { pageX: 250, pageY: 250 })
      .trigger('mouseup');

    // Assert that the cube has moved
    cy.get('.items').eq(0).should(($item) => {
      const left = parseInt($item.css('left'), 10);
      const top = parseInt($item.css('top'), 10);
      expect(left).to.be.greaterThan(0);
      expect(top).to.be.greaterThan(0);
    });
  });
});
