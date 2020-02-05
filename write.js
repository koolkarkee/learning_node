const fs = require('fs')

module.exports = function(filename, content){
    return new Promise((resolve, reject) => {
        
        fs.writeFile('./files/' + filename, content, (err, success) => {
            if(err){
                //console.log('err >> ', err)
                reject(err)
            } else {
                //console.log('success >> ', success)
                resolve(success)
            }
        })
    }) 
}
