const fs = require('fs')

module.exports = function(filePath, encoding){
    return new Promise((resolve, reject) => {
        
        fs.readFile(filePath, encoding, (err, success)=>{
            if(err){
                reject(err)
            }else {
                resolve(success)    
            }
        })
    })
}