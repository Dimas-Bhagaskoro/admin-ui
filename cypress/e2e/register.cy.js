describe("User Register", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/register");
    cy.url().should("include", "/register");
  });

  it("should display all register form elements", () => {
    cy.get("input#name").should("be.visible");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com");

    cy.get("input#password")
      .should("be.visible");

    cy.get("input#confirmPassword")
      .should("be.visible");

    cy.contains("button", "Register")
      .should("be.visible")
      .should("not.be.disabled");
  });

  it("should allow user to fill register form", () => {
    cy.get("input#name")
      .type("John Doe")
      .should("have.value", "John Doe");

    cy.get("input#email")
      .type("john@example.com")
      .should("have.value", "john@example.com");

    cy.get("input#password")
      .type("Password123")
      .should("have.value", "Password123");

    cy.get("input#confirmPassword")
      .type("Password123")
      .should("have.value", "Password123");
  });

  it("should register successfully with valid data", () => {
    cy.get("input#name").type("John Doe");
    cy.get("input#email").type(`john${Date.now()}@example.com`);
    cy.get("input#password").type("Password123");
    cy.get("input#confirmPassword").type("Password123");

    cy.contains("button", "Register").click();

    // sesuaikan dengan flow aplikasi
    cy.url().should("not.include", "/register");
  });

  it("should show error when passwords do not match", () => {
    cy.get("input#name").type("John Doe");
    cy.get("input#email").type("john@example.com");
    cy.get("input#password").type("Password123");
    cy.get("input#confirmPassword").type("Password321");

    cy.contains("button", "Register").click();

    cy.contains(/password/i).should("be.visible");
  });

  it("should show validation when email format is invalid", () => {
    cy.get("input#name").type("John Doe");
    cy.get("input#email").type("john-email");
    cy.get("input#password").type("Password123");
    cy.get("input#confirmPassword").type("Password123");

    cy.contains("button", "Register").click();

    cy.get("input#email:invalid").should("exist");
  });

  it("should not allow empty form submission", () => {
    cy.contains("button", "Register").click();

    cy.get("input#name:invalid").should("exist");
    cy.get("input#email:invalid").should("exist");
    cy.get("input#password:invalid").should("exist");
  });
});