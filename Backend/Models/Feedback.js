const mongoose = require('mongoose')
const schema = mongoose.Schema

let feedschema = new schema({
    Text: {
        type: String,
        required: true
    },

    Date: {
        type: Date
    }
})

const feedb = mongoose.model('feedback', feedschema)
module.exports = feedb