const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql2")

const app = express()

const port = process.env.PORT || 8081

app.use(express.static(__dirname + "/"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "jogo_adivinhacao"
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/rankear", (req, res) => {
    sql.query("insert into placar values (?,?,?)", [null, req.body.nome, req.body.pontos])
})

app.listen(port, () => {
    console.log("Servidor tá ON - http://localhost:8081/")
})
