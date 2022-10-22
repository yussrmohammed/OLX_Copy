const {StatusCodes} = require('http-status-codes')
const Category = require('../models/categoryModel')
const CustomError = require('../errors')



const createCategory = async (req,res)=>{
    const {enName,arName} = req.body
    const category = await Category.create({enName,arName})
    if(!category){
        throw new CustomError.BAD_REQUEST_ERROR('Failed to create a category')
    }
    res.status(StatusCodes.CREATED).json({msg:'Cateogry created successfully!',category})
}

const getAllCategories = async (req,res)=>{
    const categories = await Category.find({})
    res.status(StatusCodes.OK).json({count:categories.length,categories})
}

const getSingleCategory = async (req,res)=>{
    const {id:categoryID} = req.params
    const category = await Category.findOne({_id:categoryID})
    if(!category){
        throw new CustomError.NOT_FOUND_ERROR(`There is no category with this ID: ${categoryID}`)
    }
    res.status(StatusCodes.OK).json({category})
}

const updateCategory = async (req,res)=>{
    const {id:categoryID} = req.params
    const {enName,arName} = req.body
    const category = await Category.findOneAndUpdate(
        {_id:categoryID},
        {enName,arName},
        {new:true,runValidators:true}
    )
    if(!category){
        throw new CustomError.NOT_FOUND_ERROR(`There is no category with this ID: ${categoryID}`)
    }
    res.status(StatusCodes.OK).json({msg:'Category updated successfully!',category})
}

const deleteCategory = async (req,res)=>{
    const {id:categoryID} = req.params
    const category = await Category.findOneAndDelete({_id:categoryID})
    if(!category){
        throw new CustomError.NOT_FOUND_ERROR(`There is no category with this ID: ${categoryID}`)
    }    
    res.status(StatusCodes.OK).json({msg:'delete single category route'})
}

module.exports = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory
}