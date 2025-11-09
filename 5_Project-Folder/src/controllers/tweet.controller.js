const mongoose = require('mongoose');
const { isValidObjectId } = mongoose;
const Tweet = require('../models/tweet.model.js');
const User = require('../models/user.model.js');
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');
const asyncHandler = require('../utils/asyncHandler.js');

const createTweet = asyncHandler(async (req, res) => {
    const { content } = req.body;
    const { userId } = req.user._id;

    if(!content || content.trim() === ""){
        throw new ApiError(400, "Tweet content is required");
    }

    const tweet = await Tweet.create({
        content,
        owner: userId
    });

    return res
        .status(201)
        .json(new ApiResponse(
            201,
            "Tweet created successfully",
            { tweet }
        ))
});

const getUserTweets = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if(!isValidObjectId(userId)){
        throw new ApiError(400, "Invalid User ID");
    }

    const tweets = await Tweet.find({ owner: userId })
        .sort({ createdAt: -1 });

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            "Tweets fetched successfully",
            { tweets }
        ));
});

const updateTweet = asyncHandler(async (req, res) => {});

const deleteTweet = asyncHandler(async (req, res) => {});

module.exports = {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
};