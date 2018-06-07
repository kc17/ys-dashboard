module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['json'],
  preset: "jest-preset-angular",
  setupTestFrameworkScriptFile: "./jest/jest.setup.js",
  globals: {
    "ts-jest": {
      "tsConfigFile": "./tsconfig.json"
    },
    __TRANSFORM_HTML__: true
  },
  transform: {
    "^.+\\.(ts|js|html)$": "./node_modules/jest-preset-angular/preprocessor.js"
  },
  testMatch: [
    "**/*.+(spec|test).+(ts|js)?(x)"
  ],
  moduleFileExtensions: [
    "ts",
    "js",
    "html"
  ],
  moduleNameMapper: {
    "app/(.*)": "./src/app/$1",
    "assets/(.*)": "./src/assets/$1",
    "environments/(.*)": "./src/environments/$1"
  },
  transformIgnorePatterns: [
    "node_modules/"
  ],
  collectCoverageFrom: [
    "**/projects/**/lib/**/*.+(ts|js)",
    "!**/node_modules/**"
  ]
};
