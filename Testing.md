# Testing Strategy

Testing is compromised of multiple strategies. 

+ prettier
	+ This keeps all code formatting the same. This is primarily a tool for code quality as well as uniformity, but it is the first test the code hits. This auto fixes things and irons out any weird bugs that can come with formatting (because, javascript)
+ eslint
	+ another code formatting tool, this has a lot more context. Eslint tests for code errors such as unclosed parenthesis, bad imports, variables used before declaration, etc
+ Typescript
	+ a big hitter, typescript ensures everything in the code is what it should be. If a function expects a string and gets undefined, etc - this is the test that will catch it