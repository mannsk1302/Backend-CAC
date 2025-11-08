const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js');
const asyncHandler = require('../utils/asyncHandler.js');

const healthcheck = asyncHandler( async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            "Healthcheck successful",
            {}
        ));
});

module.exports = healthcheck;