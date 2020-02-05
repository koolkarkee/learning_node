const http = require('http')

var server = http.createServer((request, response)=> {
    //request or 1st arg is http request obj
    //response or 2nd arg is http response obj
    console.log('client connected to server')
    console.log('request URL ', request.url)
    console.log('request method >> ', request.method)
    //console.log('request >> ', request)
    response.end('welcome to node js and express ')

}) 

server.listen('8080', '127.0.0.1', (err, success) => {
    if(err){
        console.log('Server listening failed')
    } else {
        console.log('Server listening at port 8080 Inside')
        console.log('Press CTRL + C to exit')
    }
})
console.log('Server listening at port 8080 outside')
