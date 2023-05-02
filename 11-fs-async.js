// fs.readFile(path[, options], callback)

/*
path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
options <Object> | <string>
encoding <string> | <null> Default: null
flag <string> See support of file system flags. Default: 'r'.
signal <AbortSignal> allows aborting an in-progress readFile
callback <Function>
err <Error> | <AggregateError>
data <string> | <Buffer>
Asynchronously reads the entire contents of a file.*/

// fs.writeFile(file, data[, options], callback)#

/*
file <string> | <Buffer> | <URL> | <integer> filename or file descriptor
data <string> | <Buffer> | <TypedArray> | <DataView> | <Object>
options <Object> | <string>
encoding <string> | <null> Default: 'utf8'
mode <integer> Default: 0o666
flag <string> See support of file system flags. Default: 'w'.
signal <AbortSignal> allows aborting an in-progress writeFile
callback <Function>
err <Error> | <AggregateError>

When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.

When file is a file descriptor, the behavior is similar to calling fs.write() directly (which is recommended). See the notes below on using a file descriptor.

The encoding option is ignored if data is a buffer.

*/

const { readFile,writeFile} = require('fs')

console.log('start')

readFile(
    './content/first.txt',
    'utf8', // Hi this is my first text file
    (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const first = result
        readFile(
            './content/second.txt',
            'utf8',
            (err,result) => {
                if(err){
                    console.log(err)
                    return
                }
                const second = result
                writeFile(
                    './content/result-Async.txt',
                    `Here is the result : ${first} , ${second}`,
                    (err,result) => {
                        if(err){
                            console.log(err)
                            return
                        }
                        console.log('done with this task')
                    }
                    
                )
            } 
        )
    }
    )
console.log('starting next task')