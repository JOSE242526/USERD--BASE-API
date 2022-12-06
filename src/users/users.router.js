const router = require('express').Router()
const JwtPassport = require('../middleware/auth.middleware')

const userServices = require('./users.services')

router.post("/", userServices.postUser)
router.get("/", JwtPassport.authenticate('jwt', {session: false}) , userServices.getAllUsers) 


router.get("/:id", JwtPassport.authenticate('jwt', {session: false}), userServices.getUserById)
router.patch('/:id', JwtPassport.authenticate('jwt', {session: false}), userServices.patchUser) 
router.delete('/:id', JwtPassport.authenticate('jwt', {session: false}), userServices.deleteUser) 

module.exports = router 