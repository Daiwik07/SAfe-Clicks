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

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    pass: {
        type: String,
        required:true
    },
})

let users = mongoose.model('users', userSchema)


export default users


