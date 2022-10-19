const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)



module.exports=router