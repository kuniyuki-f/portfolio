module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
    'stylelint-config-html/astro',
  ],
  rules: {
    'scss/at-rule-no-unknown': [true],
    'scss/no-global-function-names': [null],
  },
};
