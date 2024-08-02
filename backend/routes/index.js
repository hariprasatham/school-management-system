const express = require("express")
const classRoutes = require("./classRoute")
const studentRoutes = require("./studentRoute")

const router = express.Router()


router.use("/class", classRoutes)
router.use("/student", studentRoutes)



module.exports = router