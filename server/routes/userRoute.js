const express = require("express");
const { userController, getUserController } = require("../controller/userController");

const router = express.Router();

router.post("/create-user",userController)

router.get("/get-all-user",getUserController)


module.exports = router;