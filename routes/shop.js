const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
    console.log('In the middleware')
    res.send('<h1>Hello from Express</h1>')
})

module.exports = router;