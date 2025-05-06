const express = require("express");
const router = express.Router();
const commentsRouter = require("./comments.route");
router.use("/comments", commentsRouter);
module.exports = router;
