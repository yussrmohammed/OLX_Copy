const {StatusCodes} = require('http-status-codes')
const Category = require('../models/categoryModel')

const createCategory = async (req,res)=>{
    res.status(StatusCodes.CREATED).json({msg:'create category route'})
}
const getAllCategories = async (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'get all categories route'})
}
const getSingleCategory = async (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'get single category route'})
}
const updateCategory = async (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'update single category route'})
}
const deleteCategory = async (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'delete single category route'})
}

module.exports = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory
}