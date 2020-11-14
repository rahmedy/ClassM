
const apiRoutes = require("./api");
const router = require("express").Router();
const path = require("path");

router.use("/api", apiRoutes);

router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;