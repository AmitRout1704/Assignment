const express = require("express");
const {
  createUserData,
  getUserData,
  DeleteUser,
  sortByDate,
  sortByName,
} = require("../controller/dataController");
const { registeruser, varifyUsre } = require("../controller/registerUser");
const router = express.Router();

router.route("/createUser").post(createUserData);
router.route("/userData").get(getUserData);
router.route("/verifyUser").post(varifyUsre);
router.route("/registerUser").post(registeruser);

module.exports = router;
