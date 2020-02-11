var express = require('express')
const port = 8090

var app = express()
//this app is entire express framework

//third party middleware
const morgan = require('morgan')
app.use(morgan('dev'))

//user body parser
var bodyParser = require('body-parser');
app.use(bodyParser());

//inbuilt middleware (for images, videos and other files)
//app.use(express.static('files')) //serve locally within express
//app.use('files', express.static('files')) //serve for external request

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
    //response.send('404 Page Not Found')
    next({
        msg : "Not Found",
        status : 404
    })
})

//error handling middleware
app.use((err, req, res, next)=>{
    console.log('I am also middleware')
    res.json({
        msg : err.msg || err,
        status : err.status || 400
    })
    console.log('err >> ', err)
})

app.listen(port, (err, success) => {
    if(err) {
        console.log('server listening failed')
    } else {
        console.log('success listening at port >> ' + port, success)
    }
}) 

//middleware - is a function that has access to
//http request object
//http response object and
//next middleware function

//the order of middleware matters
//application level middleware,
//routing level middleware,
//third party middleware - any middleware that resides in npmjs repository
//inbuilt middleware
//error handling middleware

//syntax
// function(request, response, next){

// }
