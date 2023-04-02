const router = require("express").Router();
const customer = require("./customer");
const staf = require("./stafAdmin");

router.use("/pub", customer);
router.use("/staff", staf);

module.exports = router;
