const express = require('express')
const router = express.Router()
const middleware = require("./middle")

const upload = require("../../../utils/multer")
router.get("/",middleware.get_item)
router.post("/",upload.single('image'),middleware.post_item)
router.post("/put",upload.single('image'),middleware.put_item)
router.delete("/:id",middleware.delete_item)

module.exports = router