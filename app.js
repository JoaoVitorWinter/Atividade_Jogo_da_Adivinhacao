const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql2")

const app = express()

const port = process.env.PORT || 8081

app.use(express.static(__dirname + "/"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "jogo_adivinhacao"
})