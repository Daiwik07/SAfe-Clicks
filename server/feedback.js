import mongoose from 'mongoose';
import dotenv from 'dotenv'


async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nimitgupta56789:Faridabad@99@safeclixk.e1xmt.mongodb.net/UsersData')
        console.log("successfully connected")
    }
    catch {
        console.log("failed to connect connection")
    }
}

connect()

const feedSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

let feed = mongoose.model('feedbacks', feedSchema)


export default feed


