const { contextBridge } = require("electron")
require('dotenv').config()
const OpenAI = require('openai')


const OPENAI_API_KEY = process.env.OPENAI_API_KEY


const openAI = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})





const generateImages = async (prompt) => {
    // return `Generating ${prompt}`;
    return {
        "created": 1589478378,
        "data": [
            {
                "url": "https://picsum.photos/200"
            },
            {
                "url": "https://picsum.photos/300"
            }
        ]
    }

    const image = await openAI.images.generate({ model: "dall-e-3", prompt });
    console.log(image);
    return image;
}











/*
function buildAssistant(instruction, model) {
    return async () => {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "user", content: instruction },
                {
                    role: "user", content: `Answer with the following JSON model. Do not use code blocks, just raw JSON.
---
${model}`
                },
            ],
            model: "gpt-4",
        });
    }
}
*/



// async function generate() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "system", content: "You are a helpful assistant." }],
//         model: "gpt-4",
//     });

//     console.log(completion.choices[0]);
// }












contextBridge.exposeInMainWorld('test', {
    log: () => { console.log("Test executed !!!") },
    myTest: () => { alert("Test has been called from preload !!!") },
})

contextBridge.exposeInMainWorld('ai', { generateImages, })