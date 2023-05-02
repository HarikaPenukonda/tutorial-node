// commonJS - every file is a module in node (by default)
// Modules - Encapsulated Code (only share minimum)

const john = 'John'
const peter = 'Peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)