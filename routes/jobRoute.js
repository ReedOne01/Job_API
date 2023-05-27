const express = require("express");
const router = express.Router();
const { apply, login, all_app } = require("../controller/jobController");

router.post("/apply", apply);
router.post("/login", login);
router.get("/all_app", all_app);

module.exports = router;
