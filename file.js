var w = require('./write')  

//writing to a file
w('new3.txt', 'hello file 3')  
    .then(data => { 
        console.log('success >> ', data)
    })
    .catch(err => {
        console.log('error >> ', err)
    })
    .finally(()=>{
        console.log('finally block ends')
    })


//read file
var r = require('./read')
r('./files/new5.txt', 'UTF-8')
    .then(data => { 
            console.log('success >> ', data)
        })
        .catch(err => {
            console.log('error >> ', err)
        })
        .finally(()=>{
            console.log('finally block ends from read')
        })
    

//rename file
var re = require('./rename')
re('./files/new3.txt', './files/new0.txt')
    .then(data => { 
                console.log('success >> ', data)
            })
            .catch(err => {
                console.log('error >> ', err)
            })
            .finally(()=>{
                console.log('finally block ends from rename')
            })

//delete file
var del = require('./delete')
del('./files/new5.txt')
    .then(data => { 
        console.log('success >> ', data)
    })
    .catch(err => {
        console.log('error >> ', err)
    })
    .finally(()=>{
        console.log('finally block ends from delete')
    })


    