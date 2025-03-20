const express=require("express");
const { dynamic_Meta } = require("../controllers/DynamicMetaController");

const router = express.Router()

router.route("/meta/:page").get(dynamic_Meta);


module.exports = router