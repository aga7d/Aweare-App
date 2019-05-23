const express = require("express");
const router = express.Router();
require("./glossaryRoute")(router);
module.exports = router;
