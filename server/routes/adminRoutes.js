const router = require("express").Router();
const { getAnalytics } = require("../controllers/adminController");

router.get("/analytics", getAnalytics);

module.exports = router;
