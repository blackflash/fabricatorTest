module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
      "indent": 0,
      "linebreak-style": 0,
      "no-multiple-empty-lines": [2, {"max": 2}],
      "object-curly-spacing": [2, "always"],
      "padded-blocks": 0,
      "new-cap": [2, {"capIsNewExceptions": ["Deferred"]}],
      "space-before-function-paren": [2, "always"],
      'max-len': [0, 140, 4, {
        ignoreComments: true,
        ignoreUrls: true
      }],
      "jsdoc/check-param-names": 1,
      "jsdoc/check-tag-names": 1,
      "jsdoc/check-types": 1,
      "jsdoc/newline-after-description": 1,
      "jsdoc/require-description-complete-sentence": 1,
      "jsdoc/require-example": 1,
      "jsdoc/require-hyphen-before-param-description": 1,
      "jsdoc/require-param": 1,
      "jsdoc/require-param-description": 1,
      "jsdoc/require-param-type": 1,
      "jsdoc/require-returns-description": 1,
      "jsdoc/require-returns-type": 1
    },
    "globals": {
      "window": false,
      "document": false,

      // frameworks
      _: false,

      // namespace
      mock: false,

      // jasmine
      "afterAll": false,
      "afterEach": false,
      "beforeAll": false,
      "beforeEach": false,
      "describe": false,
      "expect": false,
      "it": false,
      "spyOn": false,
      "xdescribe": false,
      "xit": false
    }
};
