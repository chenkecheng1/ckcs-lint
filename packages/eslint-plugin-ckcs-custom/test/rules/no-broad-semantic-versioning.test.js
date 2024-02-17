const rule = require("../../rules/no-broad-semantic-versioning");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();

ruleTester.run("no-broad-semantic-versioning", rule, {
  valid: [
    {
      filename: "package.json",
      code: `module.exports = ${JSON.stringify({
        devDependencies: { "eslint-plugin-ckcs-custom": "^0.0.5" },
      })}`,
    },
    {
      filename: "package.js",
      code: "var t = 1",
    },
  ],

  invalid: [
    {
      filename: "package.json",
      code: `module.exports = ${JSON.stringify({
        devDependencies: { "eslint-plugin-ckcs-custom": "*" },
      })}`,
      errors: [
        {
          message:
            'The "eslint-plugin-ckcs-custom" is not recommended to use "*"',
        },
      ],
    },
  ],
});
