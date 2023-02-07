const express = require('express')
const router = express.Router()

const middleware = require("./recuitment_middle")
const upload = require("../../../utils/multer")

router.get("/data",middleware.all_recui_get)
router.post("/",upload.single('image'),middleware.recui_post)
router.delete("/:id",middleware.recrui_delete)
module.exports = router