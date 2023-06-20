require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT||3003
const router = require("./router")
const mongoose = require("mongoose")

try {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("connected to DB")
} catch (error) {
    console.log(error)
}

app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost3003:${port}`)
})
