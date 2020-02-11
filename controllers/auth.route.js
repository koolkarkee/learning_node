var express = require('express')
var router = express.Router()

const colName = 'users' 
const dbConfig = require('../configs/db.config')


router.get('/',  (req, res, next) => {
    res.json({
        msg : 'from auth file'
    })
})
router.post('/',  (req, res, next) => {
    
})
router.post('/login',  (req, res, next) => {
    
})

router.get('/register',  (req, res, next) => {
    //data
    console.log('request body >> ', req.body)
    res.json({ msg : "I am ok" })
})

router.post('/register',  (req, res, next) => {
    //data
    console.log('request body >> ', req.body)
    dbConfig.client.connect(dbConfig.connectionUrl, { useUnifiedTopology : true }, (err, client) => {
        if(err){
            return next(err)
        }

        //use db
        var db = client.db(dbConfig.dbName)
        //perform operation
        db.collection(colName)
        .insert(req.body, (err, success) => {
            if(err) return next(err)
            res.status(200)
            .json({ "status" : "OK", msg : "one row inserted"})
        })
    })
})
router.get('/forgot-password',  (req, res, next) => {
    
})
router.get('/reset-password/:name',  (req, res, next) => {
    res.json({
        params : req.params
    })
})

module.exports = router