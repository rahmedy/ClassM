const teachersRoutes = require("./teachers");
const studentsRoutes = require("./students");
const classRoutes = require("./classes");
const router = require("express").Router();

router.use("/students", studentsRoutes);
router.use("/teachers", teachersRoutes);
router.use("/class", classRoutes);

module.exports = router;

