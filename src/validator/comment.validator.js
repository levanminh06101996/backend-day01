const { checkSchema } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");
exports.createComment = [
  checkSchema({
    title: {
      errorMessage: "Trường này không được để trống",
      notEmpty: true,
    },
    description: {
      errorMessage: "Trường này không được để trống",
      notEmpty: true,
    },
    content: {
      errorMessage: "Trường này không được để trống",
      notEmpty: true,
    },
  }),
  handleValidationErrors,
];

exports.updateComment = [
  checkSchema({
    title: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    description: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
    content: {
      optional: true,
      notEmpty: true,
      errorMessage: "Trường này không được để trống",
    },
  }),
  handleValidationErrors,
];
