var express = require('express')
const port = 8090;

var app = express()
//this app is entire express framework

//load routing level middleware
const authRoute = require('./controllers/auth.route')
const userRoute = require('./controllers/user.route')

app.use('/auth', authRoute)
app.use('/user', userRoute)

//configuration block
app.use((request, response, next) => {
    //console.log('i am middleware')
    //console.log('will come into action between request-response cycle ')
    //next()
    response.send('404 Page Not Found')
})

app.listen(port, (err, success) => {
    if(err) {
        console.log('server listening failed')
    } else {
        console.log('success listening >> ', success)
    }
}) 

//middleware - is a function that has access to
//http request object
//http response object and
//next middleware function

//the order of middleware matters
//application level middleware,
//routing level middleware,
//third party middleware
//inbuilt middleware
//error handling middleware

//syntax
// function(request, response, next){

// }
