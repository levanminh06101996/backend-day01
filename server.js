const express = require("express");
const router = require("./routers");
const app = express(); /** create express */
const port = 3000; /** http port range */
app.use(express.json()); /**parse JSON body */
app.use(express.static("public"));
app.use(router);
/**req là những thứ gửi từ client lên , res là data trả về */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
