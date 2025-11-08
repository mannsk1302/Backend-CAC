const mongoose = require('mongoose');
const { isValidObjectId } = mongoose;
const Playlist = require('../models/playlist.model.js');
const ApiResponse = require('../utils/ApiResponse.js');
const ApiError = require('../utils/ApiError.js');
const asyncHandler = require('../utils/asyncHandler.js');

const createPlaylist = asyncHandler(async (req, res) => {});

const getUserPlaylist = asyncHandler(async (req, res) => {});

const getPlaylistById = asyncHandler(async (req, res) => {});

const addVideoToPlaylist = asyncHandler(async (req, res) => {});

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {});

const deletePlaylist = asyncHandler(async (req, res) => {});

const updatePlaylist = asyncHandler(async (req, res) => {});

module.exports = {
    createPlaylist,
    getUserPlaylist,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
};