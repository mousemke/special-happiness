module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "html", "text"],
  coveragePathIgnorePatterns: ["node_modules/"],
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  modulePathIgnorePatterns: ["<rootDir>/teams/"]
};
