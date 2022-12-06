const router = require('express').Router()
const postLogin = require('./auth.services').postLogin

router.post('/login', postLogin)

module.exports = router