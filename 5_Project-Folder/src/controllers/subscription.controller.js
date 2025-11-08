const mongoose = require('mongoose');
const { isValidObjectId } = mongoose;
const Subscription = require('../models/subscription.model.js');
const User = require('../models/user.model.js');
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');
const asyncHandler = require('../utils/asyncHandler.js');

const toggleSubscription = asyncHandler(async (req, res) => {});

const getUserChannelSubscribers = asyncHandler(async (req, res) => {});

const getSubscribedChannels = asyncHandler(async (req, res) => {});

module.exports = {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
};