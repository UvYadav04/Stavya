require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const regrouter = require('./Routers/Registration')
const PORT = process.env.PORT || 8080
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const atlasurl = `mongodb+srv://uvyadav04:uvyadav123@cluster1.ae0pw2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
mongoose.connect(atlasurl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("yeah connection successfull")
    })
    .catch((e) => {
        console.log("Connection denied with error : ", e);
    })

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})



app.get('/', (req, res) => {
    res.render('Home')
})

app.use('/registration', regrouter)

app.listen(PORT, () => {
    console.log("app listening")
})
