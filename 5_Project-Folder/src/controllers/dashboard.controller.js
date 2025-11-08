const mongoose = require('mongoose');
const Video = require('../models/video.model.js');
const Subscription = require('../models/subscription.model.js');
const Like = require('../models/like.model.js');
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');
const asyncHandler = require('../utils/asyncHandler.js');

const getChannelStats = asyncHandler(async (req, res) => {});

const getChannelVideos = asyncHandler(async (req, res) => {});

module.exports = {
    getChannelStats,
    getChannelVideos
};