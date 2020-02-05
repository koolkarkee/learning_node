const http = require('http')
const fileOp_write = require('./write')
const fileOp_read = require('./read')
const fileOp_del = require('./delete')

var server = http.createServer((request, response)=> {
    //request or 1st arg is http request obj
    //response or 2nd arg is http response obj
    console.log('client connected to server')
    console.log('request URL ', request.url)
    console.log('request method >> ', request.method)
    //console.log('request >> ', request)
    //response.end('welcome to node js and express ')

    if(request.url === '/write'){
        fileOp_write('newerfile.txt', 'hello nodejs')
            .then(data => {
                response.end('successfull >> ', data)
            })
            .catch(err => {
                response.end('err >> ', err)
            })
    }
    else if(request.url === '/read'){
        fileOp_read('./files/new0.txt')
            .then(data => {
                console.log('success >> ', data.toString())
                response.end('successful >> ', data)
            })
            .catch(err => {
                console.log('err >> ', err)
                response.end('err >> ', err)
            }) 
    }
    else if(request.url === '/delete'){
        fileOp_del('./files/newerfile.txt')
            .then(data => {
                console.log('success >> ', data)
                response.end('successful >> ', data)
            })
            .catch(err => {
                console.log('err >> ', err)
                response.end('err >> ', err)
            }) 
    }
    else{
        response.end('nothing to perform')
    }
    //response.end('welcome to node and express')
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
