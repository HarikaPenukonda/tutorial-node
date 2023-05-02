const path = require('path')

console.log(path.sep) // -> /

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath) // /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base) // test.txt

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute) // /Users/harikapenukonda/Desktop/tutorial-node/tutorial-node/content/subfolder/test.txt

const absolute = path.resolve(__dirname)
console.log(absolute) // /Users/harikapenukonda/Desktop/tutorial-node/tutorial-node
