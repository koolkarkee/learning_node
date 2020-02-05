const fs = require('fs')

module.exports = function(filePath){
    return new Promise((resolve, reject) => {

        //unlink
        fs.unlink(filePath, (err, success) => {
            if(err){
                reject(err)
            }else {
                resolve(success)
            }
        })
    })
}
