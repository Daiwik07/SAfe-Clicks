import express from 'express';
import cors from "cors";
import bcrypt from 'bcrypt';
import users from "./connection.js";
import feed from './feedback.js'
import dotenv from 'dotenv';
import { getGroqChatCompletion } from './chatgpt.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

dotenv.config({ path: './.env' });

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log("Request Body:", req.body);
    next();
});

app.get("/", cors(), (req, res) => {
    res.send("Welcome to the API!");
});

app.post("/login", async (req, res) => {
    const { data } = req.body;

    try {
        const check = await users.findOne({ email: data.email });

        if (!check) {
            console.log("User not found:", data.email);
            return res.json("noexist");
        }

        const checkpass = await bcrypt.compare(data.pass, check.pass);
        if (checkpass) {
            console.log("Login successful:", check.email);
            return res.json("exist");
        } else {
            console.log("Incorrect password for user:", data.email);
            return res.json("pass incorrect");
        }
    } catch (e) {
        console.error("Login Error:", e);
        return res.status(500).json("error");
    }
});

app.post("/register", async (req, res) => {
    const { data } = req.body;

    try {
        const check = await users.findOne({ email: data.email });
        if (check) {
            console.log("User already exists:", data.email);
            return res.json("user already exist");
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedpass = await bcrypt.hash(data.pass, salt);

        const user = new users({ email: data.email, name: data.name, pass: hashedpass });
        await user.save();

        console.log("User registered:", data.email);
        return res.json("Successfully Registered");
    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json("error");
    }
});

app.post("/feed", async (req, res) => {
    const { data } = req.body;

    try {
        const feedback = new feed({
            email: data.email,
            name: data.name,
            message: data.message
        });
        await feedback.save();

        console.log("Feedback submitted:", data.email);
        return res.json("Successfully Sent");
    } catch (error) {
        console.error("Feedback Error:", error);
        return res.status(500).json("error");
    }
});

app.post('/ai', async (req, res) => {
    let { data } = req.body;

    try {
        const chatCompletion = await getGroqChatCompletion(data.ques, data.name);
        let response = chatCompletion.choices[0]?.message?.content || "";
        console.log(response);

        return res.json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json("error");
    }
});;

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
