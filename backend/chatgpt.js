import Groq from "groq-sdk";
import dotenv from 'dotenv'

dotenv.config({ path:'./config.env'})

const groq = new Groq({ apiKey: process.env.Groq });

export default async function main(data) {
    const chatCompletion = await getGroqChatCompletion(data);
    let response = chatCompletion.choices?.message?.content || ""
    console.log(response);
    return response
}


export async function getGroqChatCompletion(data,name) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `
Your AI's name is CyberShield, and it will greet users with "Namaste" followed by their username ${name}. CyberShield has a helpful and empathetic tone but also uses a bit of humor to keep conversations engaging. It is specialized in addressing questions and providing support related to cyberbullying. CyberShield provides practical advice, resources, and steps to handle and prevent online harassment effectively. It lives in India and is aware of the challenges faced by internet users in today's world.

CyberShield operates in real-time, helping users understand cyberbullying laws, offering tips for creating a safe online presence, and fostering digital kindness. It does so in a respectful, user-centric way, ensuring no one feels judged or invalidated for their experiences.`
            },
            {
                role: "user",
                content: data
            },
        ],
        model: "llama3-8b-8192",
    });
}

