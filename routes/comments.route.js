const express = require("express");
const { readDB, writeFile } = require("../untils/file.until");
const router = express.Router();

readDB("comments").then((db) => {
  console.log(db);
});

const comments = [];

router.get("/", async (req, res) => {
  const comments = await readDB(RESOURCE);

  res.json({
    status: "succes",
    data: comments,
  });
});

const RESOURCE = "comments";
//[GET]
router.get("/:id", async (req, res) => {
  const comments = await readDB(RESOURCE);
  const comment = comments.find((item) => item.id == +req.params.id);
  if (!comment) {
    res.json({
      status: "error",
      message: "Resource Not Found",
    });
    return;
  } else {
    res.json({
      status: "success",
      massege: "Resoure get sucsses",
    });
  }
});

// [POST]
let uniqID = 0;
router.post("/", async (req, res) => {
  const comments = await readDB(RESOURCE);

  const newComment = {
    id: (comments[comments.length - 1].id ?? 0) + 1,
    comment: req.body.comment,
  };
  comments.push(newComment);
  await writeFile(RESOURCE, comments);
  res.json({
    status: "success",
    data: newComment,
  });
});

// [PUT]
router.put("/:id", async (req, res) => {
  const comments = await readDB(RESOURCE, []);

  const comment = comments.find((item) => item.id == +req.params.id);
  if (!comment) {
    res.json({
      status: "error",
      message: "Resource Not Found",
    });
    return;
  }
  comment.comment = req.body.comment;
  await writeFile(RESOURCE, comments);

  res.json({
    status: "success",
    data: comment,
  });
});
// [DELETE]

router.delete("/:id", async (req, res) => {
  const comments = await readDB(RESOURCE);

  const index = comments.findIndex((item) => item.id == +req.params.id);
  if (index === -1) {
    res.json({
      status: "fail",
      message: "Resource Not Found",
    });
    return;
  }
  comments.splice(index, 1);
  await writeFile(RESOURCE, comments);
  res.status(204).send();
});

module.exports = router;
