const fsp = require("fs").promises;

module.exports = {
  async createSpashiprc() {
    await fsp.writeFile(
      ".spashiprc.yaml",
      `
        envs:
          default:
            url: https://fake-spaship-api-host.default.com
          dev:
            url: https://fake-spaship-api-host.dev.com
        `
    );
  },

  async clean() {
    try {
      await fsp.unlink("spaship.yaml");
      await fsp.unlink(".spashiprc.yaml");
    } catch (e) {
      // Unlink will throw the error if file doesn't exist.
      // That's why we are ignoring the error object.
    }
  },
};
