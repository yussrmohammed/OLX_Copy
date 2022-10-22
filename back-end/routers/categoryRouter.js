const express = require('express')
const router = express.Router()

const {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController')

router.post('/',createCategory)
router.get('/',getAllCategories)
router.get('/:id',getSingleCategory)
router.patch('/:id',updateCategory)
router.delete('/:id',deleteCategory)


module.exports = router