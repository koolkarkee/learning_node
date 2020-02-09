var express = require('express')
var router = express.Router()

router.get('/',  (req, res, next) => {
    res.json({
        msg : 'from auth file'
    })
})
router.post('/',  (req, res, next) => {
    
})
router.post('/login',  (req, res, next) => {
    
})
router.post('/register',  (req, res, next) => {
    
})
router.get('/forgot-password',  (req, res, next) => {
    
})
router.get('/reset-password/:name',  (req, res, next) => {
    res.json({
        params : req.params
    })
})

module.exports = router