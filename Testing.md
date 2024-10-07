# Testing Strategy

Testing is compromised of multiple strategies.

- prettier
  - This keeps all code formatting the same. This is primarily a tool for code quality as well as uniformity, but it is the first test the code hits. This auto fixes things and irons out any weird bugs that can come with formatting (because, javascript)
- eslint
  - another code formatting tool, this has a lot more context. Eslint tests for code errors such as unclosed parenthesis, bad imports, variables used before declaration, etc
- Typescript
  - a big hitter, typescript ensures everything in the code is what it should be. If a function expects a string and gets undefined, etc - this is the test that will catch it
- Jest
  - unit tests. this is the core of our testing. it is the hand written tests made by the devs that wroote the code - to ensure each function and component does what it should. test coverage should be above 90%, however 90% is a side effect of good testing. 90% coverage with bad tests is just as bad as no tests
- End to end and integration tests
  - tests such as cypress and puppeteer are not super suitable for this code test, but should be added when the app gets a proper stage environment. these tests are used to ensure all the previously tested working parts fit together properly
