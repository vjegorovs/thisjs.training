module.exports = {
  preset: "ts-jest",
  globals: {},
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
};
