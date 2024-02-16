module.exports = {
  plugins: ['ckcs-custom-eslint-plugin'],
  rules: {
    'ckcs-custom-eslint-plugin/no-http-url': 'warn',
    'ckcs-custom-eslint-plugin/no-secret-info': 'error',
  },
};
