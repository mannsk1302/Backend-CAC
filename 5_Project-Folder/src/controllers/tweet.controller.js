const mongoose = require('mongoose');
const { isValidObjectId } = mongoose;
const Tweet = require('../models/tweet.model.js');
const User = require('../models/user.model.js');
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');
const asyncHandler = require('../utils/asyncHandler.js');

const createTweet = asyncHandler(async (req, res) => {});

const getUserTweets = asyncHandler(async (req, res) => {});

const updateTweet = asyncHandler(async (req, res) => {});

const deleteTweet = asyncHandler(async (req, res) => {});

module.exports = {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
};