const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError.js');
const User = require('../models/user.model.js');
const uploadOnCloudinary = require('../utils/cloudinary.js');
const ApiResponse = require('../utils/ApiResponse.js');

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exist?: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const { fullName, email, username, password } = req.body;
    console.log("email: ", email);

    if(
        [ fullName, email, username, password ].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "User Details are required");
    }

    const existedUser = User.findOne({
        $or: [{ email }, { username }]
    });

    if(existedUser) {
        throw new ApiError(409, "User already exists");
    };

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(403, "No avatar local path");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(403, "No avatar local path");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        username: username.toLowerCase(),
        password
    });

    const createdUser = await User.findById(user.id).select(
        "-password -refreshToken"
    );

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while retrieving this user.");
    }

    return res.status(201).json(
        new ApiResponse({
            statusCode: 201,
            message: "Success",
            data: createdUser
        })
    );
});

module.exports = registerUser;