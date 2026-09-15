class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // === Selectores (locators) ===
    this.usernameInput = page.getByTestId('login-username');
    this.passwordInput = page.getByTestId('login-password');
    this.submitButton = page.getByTestId('login-submit');
  }

  // === Acciones ===

  // Ir a la página de login
  async goto() {
    await this.page.goto('http://localhost/sysayg/index.php');
  }

  // Completar usuario y contraseña
  async fillCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  // Hacer clic en el botón de login
  async submit() {
    await this.submitButton.click();
  }

  // Acción completa: llenar y enviar (atajo)
  async login(username, password) {
    await this.fillCredentials(username, password);
    await this.submit();
  }
}

module.exports = { LoginPage };