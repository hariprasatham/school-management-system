const Student = require("../models/Student")

const create = async(data)=>{
    // Check if a student with the same email already exists
    const existingStudent = await Student.findOne({ email: data.email });
    if (existingStudent) {
        throw new Error("A student with this email already exists.");
    }
    return await Student.create(data)}

const getAll = async()=>{return await Student.find({})}

const getById = async(id)=>{return await Student.findById(id)}

const deleteById = async(id)=>{return await Student.findByIdAndDelete(id).exec()}

const updateById = async(id, data)=>{return await Student.findByIdAndUpdate(id, data, {new: true}).exec()}

module.exports = { create, getAll, getById, deleteById, updateById }