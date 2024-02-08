import PostMessage from "../models/postMessages.js";

export const getPost = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const createPost = async (req, res) => {
    const post = req.body;
    const newpost = postMessage(post);

    try {
        await newpost.save();
        res.status(201).json(newpost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}