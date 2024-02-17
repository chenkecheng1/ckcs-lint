module.exports = {
  plugins: ["eslint-plugin-ckcs-custom"],
  rules: {
    "eslint-plugin-ckcs-custom/no-http-url": "warn",
    "eslint-plugin-ckcs-custom/no-secret-info": "error",
  },
};
