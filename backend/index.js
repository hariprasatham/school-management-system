const express = require("express");
const cors = require("cors")
const dbConfig = require("./config/dbConfig")
const routes = require("./routes")
require("dotenv").config()

const PORT = process.env.PORT || 8080;


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1", routes)

dbConfig();


app.listen(PORT, ()=>console.log(`server listened on port: ${PORT}`))