const { Router } = require("express");

const {
    healthcheck
} = require("../controllers/healthcheck.controller.js");

const verifyJWT = require("../middlewares/auth.middleware.js");

const router = Router();

router.route("/")
    .get(healthcheck);

module.exports = router;