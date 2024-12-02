describe("Quiz Website", () => {
	beforeEach(() => {
		cy.visit("https://blue-pipes.onrender.com/");
	});

	it("makes sure that the quiz starts after lcicking start quiz", () => {
		cy.get('.btn-primary').should("exist").click();
        cy.get('.btn-primary').contains("Start Quiz").should("not.exist");
	});

    it("makes sure that the quiz does not make another question appear after the 10th question", () => {
        cy.get('.btn-primary').contains("Start Quiz").click();
        for (let i = 0; i < 10; i++) {
            cy.get('.btn-primary').contains("1").click();
        }
        cy.get('h2').contains("Quiz Completed").should("exist");
        cy.get('.btn-primary').contains("1").should("not.exist");
	});
});
