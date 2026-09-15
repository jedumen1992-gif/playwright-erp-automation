class MenuPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // === Selectores de los módulos del menú ===
    this.moduloConfiguraciones = page.getByTestId('modulo-configuraciones');
    this.moduloReferenciales = page.getByTestId('modulo-referenciales');
    this.moduloCompras = page.getByTestId('modulo-compras');
    this.moduloInformes = page.getByTestId('modulo-informes');
  }

  // === Acciones ===

  // Ir directo al menú
  async goto() {
    await this.page.goto('http://localhost/sysayg/menu.php');
  }

  // Ir a una página específica del menú (por data-testid)
  async irAPagina(testId) {
    await this.page.getByTestId(testId).click();
  }

  // Verificar que un módulo específico está visible
  async verificarModuloVisible(nombreModulo) {
    const modulo = this.page.getByTestId(nombreModulo);
    await modulo.waitFor({ state: 'visible' });
  }
}

module.exports = { MenuPage };