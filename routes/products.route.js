const express = require("express");
const router = expres.Router();

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
];

router.get("/", (req, res) => {
  res.json({
    data: products,
  });
});

router.get("/:id", (req, res) => {
  res.json({
    data: products.find((prod) => prod.id === +req.params),
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({});
});

router.delete("/:id", (req, res) => {
  res.json;
});

module.exports = router;
