describe("Filters functionality", () => {
  beforeEach(() => {
    cy.visit("/filters");
  });

  it("should apply the filters correctly", () => {
    cy.get(".filter-button").click();
    cy.contains("Results").should("be.visible");
  });

  it("filters by team", () => {
    cy.get('[data-testid="team-filter"]').select("Lehigh");
    cy.url().should("include", "team=Lehigh");
    cy.get('[data-testid="result-item"]').should("exist");
  });

  it("filters by weight", () => {
    cy.get('[data-testid="weight-filter"]').select("125 lbs");
    cy.url().should("match", /weight=125/);
    cy.get('[data-testid="result-item"]').should("contain", "125 lbs");
  });

  it("filters by round", () => {
    cy.get('[data-testid="round-filter"]').select("Quarterfinals");
    cy.url().should("include", "round=Quarterfinals");
    cy.get('[data-testid="result-item"]').should("contain", "Quarterfinals");
  });

  it("resets filters", () => {
    cy.get('[data-testid="team-filter"]').select("Army West Point");
    cy.get('[data-testid="weight-filter"]').select("133 lbs");
    cy.get('[data-testid="reset-filters"]').click();
    cy.url().should("not.include", "team=").and("not.include", "weight=");
  });
});
