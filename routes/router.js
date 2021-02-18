const express = require('express');
const router = express.Router();

const auth = require('./auth');
const load = require('./load');
const deleteD = require('./delete');
const tables = require('./createTables')
const put = require("./put")
const post = require("./post")

router.use("/api/conta", auth);
router.use("/api/get", load);
router.use("/api/delete", deleteD)
router.use("/api/put", put)
router.use("/api/create", tables);
router.use("/api/post", post)

module.exports = router;