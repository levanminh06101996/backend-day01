const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments.controllers");
const commentValidator = require("../validator/comment.validator");
// readDB("comments").then((db) => {
//   console.log(db);
// });

router.get("/", commentsController.getAllComments);
//[GET]
router.get("/:id", commentsController.getCommentById);
// [POST]
router.post(
  "/",
  commentValidator.createComment,
  commentsController.CreateComment
);

// [PUT]
router.put(
  "/:id",
  commentValidator.updateComment,
  commentsController.UpdateComment
);
// [DELETE]

router.delete("/:id", commentsController.DeleteComment);

module.exports = router;
