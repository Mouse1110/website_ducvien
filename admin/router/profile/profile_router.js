const express = require('express')
const router = express.Router()
const middleware = require("./middle")

const upload = require("../../../utils/multer")
router.get("/",middleware.get_item)
router.post("/",middleware.put_item)

module.exports = router