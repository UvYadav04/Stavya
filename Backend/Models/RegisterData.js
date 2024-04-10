const mongoose = require('mongoose')
const schema = mongoose.Schema

let registerschema = new schema({
    Event: {
        type: String,
    },
    Name: {
        type: String,
    },
    Id: {
        type: Number,
    },
    Batch: {
        type: Number,
    },
    Institute: {
        type: String
    },
    TeamName: {
        type: String
    },
    Member1Name: {
        type: String
    },
    Member1Id: {
        type: String
    },
    Member2Name: {
        type: String
    },
    Member2Id: {
        type: String
    },
    Member3Name: {
        type: String
    },
    Member3Id: {
        type: String
    },
    Contact: {
        type: Number,
    },
    Email: {
        type: schema.Types.Buffer
    },
    Photo: {
        type: schema.Types.Mixed
    },
    Date: {
        type: Date
    }
})

const Registration = mongoose.model('Registration', registerschema)


module.exports = Registration