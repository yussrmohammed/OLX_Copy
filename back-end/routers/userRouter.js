const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)
router.put('/:id', userController.updateUser)



module.exports=router