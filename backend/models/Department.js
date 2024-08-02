const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema({
    "department_name": {
        type: String,
        required: true
    }
})


export default mongoose.model("Department", DepartmentSchema)