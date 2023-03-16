const express = require("express")
const morgan = require('morgan')
 
const app = express()

app.use(morgan("combined"))

app.get("/", (req, res) => {
    res.send("Hello I am a teapot\n")
})

app.listen(8888, () => {
    console.log("listening on port 8888")
})