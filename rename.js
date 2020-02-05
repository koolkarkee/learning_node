const fs = require('fs')

module.exports = function(oldPath, newPath){
    return new Promise((resolve, reject) => {
        
        fs.rename(oldPath, newPath, (err, success) => {
            if(err){
                reject(err)
            }else{
                resolve(success)
            }
        })        
    })
}
