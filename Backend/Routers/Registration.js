const express = require('express')
const router = express.Router()
const registration = require('../Models/RegisterData')
const feedback = require('../Models/Feedback')

const multer = require("multer")


let upload = multer({
    dest: '../Images'
})
router.get('/new', (req, res) => {
    // console.log("Form")
    res.render('Form')
})

router.post('/new', async (req, res) => {
    try {
        // console.log(req)
        const data = req.body.data
        // const file = req.body.image

        // console.log(file.name)
        let data2 = {
            Event: data.Event,
            Name: data.Name,
            Id: data.Id,
            Batch: data.Batch,
            Institute: data.Institute,
            TeamName: data.TeamName,
            Member1Name: data.Member1Name,
            Member1Id: data.Member1Id,
            Member2Name: data.Member2Name,
            Member2Id: data.Member2Id,
            Member3Name: data.Member3Name,
            Member3Id: data.Member3Id,
            Contact: data.Contact,
            Email: data.Email
        };

        console.log(data2)

        // ************* cehcking if the team / individual already registered **********
        let user = await registration.findOne({ Event: data2.Event, Id: data2.Id })
        if (user) {
            console.log(user)
            return res.json({ success: false, message: "Already registered" })
        }
        //         ************* cehcking if the team / individual already registered **********
        let b = new registration(data2)
        await b.save()
        res.json({ success: true })
    }
    catch (e) {
        res.json({ success: false, message: "something went wrong" })
    }
})

router.post('/feedback', async (req, res) => {
    try {
        let data = req.body
        console.log(data)

        let f = new feedback({ Text: data.Text, Date: Date.now() })
        await f.save()
            .then(() => {
                return res.json({ success: true })
            })
            .catch((e) => {
                // console.log(`error : `, e)
                return res.json({ success: false, message: "Saving error" })
            })
    }
    catch {
        return res.json({ success: false, message: "catch error" })
    }
})

module.exports = router