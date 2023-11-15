// cypress/integration/hospitals.spec.js

describe("Hospitals", () => {
  it("fetches and displays hospitals", () => {
    cy.intercept("GET", "http://localhost:9000/api/v1/hospitals", (req) => {
      delete req.headers["if-none-match"];
    }).as("getHospitals");

    cy.visit("/");

    cy.get("video").should("exist");
    cy.get("video").should("have.prop", "paused", false);

    cy.wait(5000);

    cy.contains("button", "Hospital").should("exist");
    cy.contains("button", "Hospital").click();

    cy.wait("@getHospitals").should((xhr: any) => {
      expect(xhr.response.statusCode).to.equal(200);
      expect(xhr.response.body.data).to.have.length.at.least(3);

      const hospitals = xhr.response.body.data;
      hospitals.forEach((hospital: any) => {
        expect(hospital.picture).to.be.a("string");
      });
    });
  });
});
