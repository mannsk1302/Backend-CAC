const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError.js');
const User = require('../models/user.model.js');
const uploadOnCloudinary = require('../utils/cloudinary.js');
const ApiResponse = require('../utils/ApiResponse.js');

const generateAccessAndRefreshToken = async(userId) => {
    try{
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    }catch(error){
        throw new ApiError(500, "Something went wrong while generating access and refresh token.");
    }
}

const registerUser = asyncHandler( async (req, res) => {

    // get user details from frontend
    const { fullName, email, username, password } = req.body;
    // console.log("email: ", email);

    // validation - not empty
    if(
        [ fullName, email, username, password ].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "User Details are required");
    }

    // check if user already exist?: username, email
    const existedUser = await User.findOne({
        $or: [{ email }, { username }]
    });

    if(existedUser) {
        throw new ApiError(409, "User already exists");
    }

    // check for images, check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if(!avatarLocalPath){
        throw new ApiError(403, "No avatar local path");
    }

    // upload them to cloudinary, avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(403, "No avatar local path");
    }

    // create user object - create entry in db
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        username: username.toLowerCase(),
        password
    });

    // remove password and refresh token field from response
    const createdUser = await User.findById(user.id).select(
        "-password -refreshToken"
    );

    // check for user creation
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while retrieving this user.");
    }

    // return response
    return res.status(201).json(
        new ApiResponse({
            statusCode: 201,
            message: "Success",
            data: createdUser
        })
    );
});

const loginUser = asyncHandler( async (req, res) => {

    // req body -> data
    const { email, username, password } = req.body;

    // username or email
    if(!username || !email){
        throw new ApiError(403, "Username or email is required");
    }

    // find the user
    const user = await User.findOne({
        $or: [
            { email }, { username }
        ]
    });

    if(!user){
        throw new ApiError(403, "No user found");
    }

    // password check
    const isPasswordValid = await user.isPasswordCorrect(password);
    if(!isPasswordValid){
        throw new ApiError(401, "Invalid password");
    }

    // access and refresh token
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true,
    };

    // send cookie
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                "Success",
                {
                    user: loggedInUser, accessToken, refreshToken
                }
            )
        );
});

const logoutUser = asyncHandler( async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken : undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, "User logged out Successfully", {}));
})

module.exports = { registerUser, loginUser, logoutUser };