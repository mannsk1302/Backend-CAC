const mongoose = require('mongoose');
const { isValidObjectId } = mongoose;
const Video = require('../models/video.model.js');
const User = require('../models/user.model.js');
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');
const asyncHandler = require('../utils/asyncHandler.js');

const getAllVideos = asyncHandler(async (req, res) => {});

const publishAVideo = asyncHandler(async (req, res) => {});

const getVideoById = asyncHandler(async (req, res) => {});

const updateVideo = asyncHandler(async (req, res) => {});

const deleteVideo = asyncHandler(async (req, res) => {});

const togglePublishStatus = asyncHandler(async (req, res) => {});

module.exports = {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
};