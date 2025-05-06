const express = require("express");
const router = require("./src/routes");

const app = express(); /** create express */
const port = 3000; /** http port range */
app.use(express.json());
app.use("/api/v1", router);
app.listen(port, () => {
  console.log(`runing sever ${port}`);
});
