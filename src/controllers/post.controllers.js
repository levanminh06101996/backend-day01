const express = require("express");
const postController = require("...controllers/post");

const router = express.Router();
router.get("/", postController.index);
router.get("/:id", postController.show);
router.post();
