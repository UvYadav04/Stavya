const express = require('express')
const router = express.Router()
const registration = require('../Models/RegisterData')
const feedback = require('../Models/Feedback')

const multer = require("multer")


// const storage = multer.diskStorage({
//     destination: '../Images',
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

let upload = multer({
    dest: '../Images'
})
router.get('/new', (req, res) => {
    console.log("Form")
    res.render('Form')
})

router.post('/new', upload.single('image'), async (req, res) => {
    console.log(req)
    const data = req.body.data
    const file = req.body.image

    console.log(file.name)
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
        // Photo: data.photo.photoname,
        Email: data.Email
    };

    // ************* cehcking if the team / individual already registered **********
    let user = registration.findOne({ Event: data2.Event, Id: data2.Id })
    if (user) {
        return res.json({ success: false, message: "Already registered" })
    }
    //         ************* cehcking if the team / individual already registered **********
    let b = new registration(data2)
    await b.save()
        .then(() => {
            return res.json({ success: true })
        })
        .catch((e) => {
            console.log(`error : `, e)
            return res.json({ success: false, message: "Please fill the necessary details" })
        })
    console.log(b)
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