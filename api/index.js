const express = require("express");
const router = express.Router();
require("./glossaryRoute")(router);
require("./tipsRoute")(router);
require("./scoreRoute")(router);
module.exports = router;
