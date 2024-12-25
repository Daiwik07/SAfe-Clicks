import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config({ path:'/etc/secrets/uri.env'})

async function connect() {
    try {
        await mongoose.connect(process.env.uri)
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


