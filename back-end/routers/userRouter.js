const router = require('express').Router()
const userController = require('../controllers/userController')
const {authenticateUser}= require('../middleware/authenticaton')

router.post('/', userController.createUser)
router.post('/login', userController.logIn)
router.get('/',authenticateUser, userController.getAllUsers)
router.get('/logout',authenticateUser, userController.logOut)
router.get('/:id',authenticateUser,userController.getOneUser)
router.put('/:id',authenticateUser ,userController.updateUser)
router.delete('/:id', authenticateUser,userController.deleteUser)


module.exports=router