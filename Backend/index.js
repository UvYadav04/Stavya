const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./Routers/Registration')


mongoose.connect('mongodb://0.0.0.0:27017/StavyaRegistration', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("yeah connection successfull")
    })
    .catch((e) => {
        console.log("Connection denied with error : ", e);
    })

app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())


app.get('/', (req, res) => {
    console.log("Home page")
    res.render('Home')
})

app.use('/registration', router)

app.listen(8080, () => {
    console.log("app listening")
})
