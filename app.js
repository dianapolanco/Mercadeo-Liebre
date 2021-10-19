const express = require ("express")
const path = require("path")
const app = express()
const SERVER = 4000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.use(express.static("public"))

app.listen(process.env.PORT || 4000,() => {
    console.log("creado servidor 4000")
})