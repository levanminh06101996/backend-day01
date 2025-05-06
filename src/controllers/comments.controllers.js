const { readDB, writeFile } = require("../../untils/file.until");

const comments = [];
const RESOURCE = "comments";

//[GET all comments]
exports.getAllComments = async (req, res) => {
  const comments = await readDB(RESOURCE);

  res.json({
    status: "succes",
    data: comments,
  });
};

//[GET comment]
exports.getCommentById = async (req, res) => {
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
};

//[POST]
let uniqID = 0;

exports.CreateComment = async (req, res) => {
  const comments = await readDB(RESOURCE);

  const newComment = {
    id: (comments[comments.length - 1].id ?? 0) + 1,
    ...req.body,
    // comment: req.body.comment,
  };
  comments.push(newComment);
  await writeFile(RESOURCE, comments);
  res.json({
    status: "success",
    data: newComment,
  });
};

exports.UpdateComment = async (req, res) => {
  const comments = await readDB(RESOURCE, []);

  const comment = comments.find((item) => item.id == +req.params.id);
  if (!comment) {
    res.json({
      status: "error",
      message: "Resource Not Found",
    });
    return;
  }
  Object.assign(comment, req.body);
  // comment.comment = req.body.comment;
  await writeFile(RESOURCE, comments);

  res.json({
    status: "success",
    data: comment,
  });
};

exports.DeleteComment = async (req, res) => {
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
};
