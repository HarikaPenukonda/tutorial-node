// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.write('Welcome to our home page!')
//     res.end()
// })

// server.listen(5000)

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page!')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else {
        res.end(`<h1> Oops </h4>
        <h4> we cannot seem to find the page you are looking for </h4>
        <a href = "/"> Back </>`)
    }
    

})

server.listen(5000)