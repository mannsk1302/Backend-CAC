const mongoose = require('mongoose');
const asyncHandler = require('../utils/asyncHandler.js');
const ApiError = require('../utils/ApiError.js');
const Comment = require('../models/comment.model.js');
const ApiResponse = require('../utils/ApiResponse.js');

const addComment = asyncHandler(async (req, res) => {});

const getVideoComments = asyncHandler(async (req, res) => {});

const updateComment = asyncHandler(async (req, res) => {});

const deleteComment = asyncHandler(async (req, res) => {});

module.exports = {
    addComment,
    getVideoComments,
    updateComment,
    deleteComment
};