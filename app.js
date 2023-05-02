// commonJS - every file is a module in node (by default)
// Modules - Encapsulated Code (only share minimum)

// To access them we need to use require

const names = require('./4-names')
console.log(names) // { john: 'John', peter: 'Peter' }

sayHi('susan')
sayHi(john)
sayHi(peter)