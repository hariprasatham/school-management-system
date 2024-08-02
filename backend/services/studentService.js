const { create, getAll, getById, updateById, deleteById} = require("../repository/studentRepository")

class StudentService{
    async createStudent( data ){
        return await create(data);
    }
    async getAllStudents( data ){
        return await getAll();
    }
    async getStudentById(id){
        return await getById(id)
    }
    async updateStudentById(id, data){
        return await updateById(id, data)
    }
    async deleteStudentById(id){
        return await deleteById(id)
    }
}

    module.exports = new StudentService();