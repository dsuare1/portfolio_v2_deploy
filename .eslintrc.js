
module.exports = {
  "plugins": [
    "react",
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true,
  },
  "extends": [
    "airbnb",
    "plugin:react/recommended",
  ],
  "rules": {
    "arrow-body-style": 0,
    "comma-dangle": ["error", "only-multiline"],
    "class-methods-use-this": 0,
    "max-len": [0, 256, { "ignoreComments": true }],
    "no-console": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-array-index-key": 0,
    "react/prefer-stateless-function": 0,
    "space-before-function-paren": 0,
  },
};
