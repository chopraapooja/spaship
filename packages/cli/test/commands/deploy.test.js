// This test file uses oclif's testing tools.
// See: https://oclif.io/docs/testing
// Docs: https://github.com/oclif/fancy-test

let { expect, test } = require("@oclif/test");
const execa = require("execa");
const { clean, createSpashiprc } = require("../test-helper");

function setup() {
  return (
    test
      .do(clean)
      .do(createSpashiprc)
      // command init will create spaship.yaml
      .command(["init", "--name", "Foo", "--path", "/foo"])
      .finally(clean)
  );
}

describe("deploy", () => {
  // the deploy command is current in a form written for the POC.  We need to rewrite it for MVP.
  const EXPECTED_CURL_FOR_DEV_DEPLOY =
    "curl https://fake-spaship-api-host.dev.com/api/v1/applications/deploy -H 'X-API-Key: API_KEY' -F name=Foo -F path=/foo -F upload=@build.tar.gz -F ref=undefined";

  setup()
    .stdout()
    .stub(execa, "command", async (curlCmd, shellArg) => {
      expect(curlCmd).equals(EXPECTED_CURL_FOR_DEV_DEPLOY);
      expect(shellArg.shell).equals(true);
      return { stdout: "success" };
    })
    .command(["deploy", "build.tar.gz", "--env", "dev", "--apikey", "API_KEY"])
    .it("can deploy to given --env successfully", async (ctx) => {
      expect(ctx.stdout).to.contain("Deploying SPA to dev (https://fake-spaship-api-host.dev.com)");
      expect(ctx.stdout).to.contain("success");
    });

  const EXPECTED_CURL_FOR_DEFAULT_ENV_DEPLOY =
    "curl https://fake-spaship-api-host.default.com/api/v1/applications/deploy -H 'X-API-Key: API_KEY' -F name=Foo -F path=/foo -F upload=@build.tar.gz -F ref=undefined";
  setup()
    .stdout()
    .stub(execa, "command", async (curlCmd, shellArg) => {
      expect(curlCmd).equals(EXPECTED_CURL_FOR_DEFAULT_ENV_DEPLOY);
      expect(shellArg.shell).equals(true);
      return { stdout: "success" };
    })
    .command(["deploy", "build.tar.gz", "--apikey", "API_KEY"])
    .it("should deploy to 'default' env successfully when --env flag is not given", async (ctx) => {
      expect(ctx.stdout).to.contain("Deploying SPA to default (https://fake-spaship-api-host.default.com)");
      expect(ctx.stdout).to.contain("success");
    });

  setup()
    .stdout()
    .stub(execa, "command", async () => {
      return { stdout: "success" };
    })
    .command(["deploy", "build.tar.gz"])
    .catch((err) => {
      expect(err.message).to.contain(
        "An API key must be provided, either in your spashiprc file or in a --apikey option."
      );
    })
    .it("should log error when API key is not given in either of flag(--apikey) or .spashiprc");
});
