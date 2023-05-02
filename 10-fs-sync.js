// fs.readFileSync(path[, options]) - Returns the contents of the path.

// options <Object> | <string>
// encoding <string> | <null> Default: null
// flag <string> See support of file system flags. Default: 'r'.

// fs.writeFileSync(file, data[, options])

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = 
    readFileSync(
    './content/first.txt', // path
    'utf8' // options - encoding code
    ) 

const second = 
    readFileSync(
        './content/second.txt',
        'utf8'
        )

console.log(first, second)

writeFileSync(
    './content/returnSync.txt', // file
    `Here is the result : ${first},${second}`, // data
    {flag : 'a'} // option to append
)

console.log('done with the task')
console.log('starting the next one')