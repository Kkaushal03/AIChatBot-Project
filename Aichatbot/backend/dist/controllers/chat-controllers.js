import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user)
            return res.status(401).json({ message: "User not registered or Token malfunctioned" });
        // Prepare messages for OpenAI chat completion
        const chats = user.chats.map(({ role, content }) => ({ role, content }));
        chats.push({ role: "user", content: message });
        // Save updated chats for the user
        user.chats.push({ role: "user", content: message });
        await user.save();
        // Configure and use OpenAI API
        const openai = configureOpenAI();
        // Prepare completion parameters
        const params = {
            model: "gpt-3.5-turbo",
            prompt: chats.map(chat => `${chat.role}: ${chat.content}`).join("\n"),
            max_tokens: 150,
        };
        // Send request to OpenAI for chat completion
        const chatResponse = await openai.completions.create(params);
        // Extract and save OpenAI response to user's chats
        const responseMessage = chatResponse.choices[0].text.trim(); // Adjust based on actual response structure
        user.chats.push({ role: "assistant", content: responseMessage });
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};
export const sendChatsToUser = async (req, res, next) => {
    //user Token check
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("user not registered or Token malfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions did't matched");
        }
        return res
            .status(200)
            .json({ message: "OK", chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
export const deleteChats = async (req, res, next) => {
    //user Token check
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("user not registered or Token malfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions did't matched");
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res
            .status(200)
            .json({ message: "OK" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=chat-controllers.js.map