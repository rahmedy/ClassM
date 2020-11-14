const userRoutes = require("./users");
const classRoutes = require("./classes");
const router = require("express").Router();

router.use("/users", userRoutes);
router.use("/class", classRoutes);

module.exports = router;