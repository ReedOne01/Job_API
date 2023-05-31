const express = require("express");
const router = express.Router();
const { apply, login, all_app, me } = require("../controller/jobController");
const { protect } = require("../middleware/authMiddleware");

router.post("/apply", apply);
router.post("/login", login);
router.get("/all_app", all_app);
router.get("/me", protect, me);

router.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: `canot find ${req.originalUrl} on this server`,
  });
  next();
});

module.exports = router;
