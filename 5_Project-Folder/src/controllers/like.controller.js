const mongoose = require('mongoose');
const { isValidObjectId } = mongoose;
const Like = require('../models/like.model.js');
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');
const asyncHandler = require('../utils/asyncHandler.js');

const toggleVideoLike = asyncHandler(async (req, res) => {});

const toggleCommentLike = asyncHandler(async (req, res) => {});

const toggleTweetLike = asyncHandler(async (req, res) => {});

const getVideoLikes = asyncHandler(async (req, res) => {});

module.exports = {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getVideoLikes
};