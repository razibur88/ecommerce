require('dotenv').config()
const express = require('express')
const routes = require("./routes")
const db = require("./config/dbConnection")
var cors = require('cors')
const app = express()
app.use(cors())
db()
app.use(express.json())
app.use(routes)


app.post('/', function (req, res) {
  res.send('Hello World hhh')
})

app.listen(8000,()=>{
    console.log("ami 8000 port Running");
})