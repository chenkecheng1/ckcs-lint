'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://ckc.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://ckc.com';",
      output: "var test = 'http://ckc.com';",
      errors: [
        {
          message: 'Recommended "http://ckc.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://ckc.com' />",
      output: "<img src='http://ckc.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://ckc.com" switch to HTTPS',
        },
      ],
    },
  ],
});
