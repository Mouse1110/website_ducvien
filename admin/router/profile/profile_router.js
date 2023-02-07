const express = require('express')
const router = express.Router()

const middleware = require("./profile_middle")

router.get("/data",middleware.profile_get)
router.post("/",middleware.profile_post)
// router.delete("/:id",middleware.profile_delete)

module.exports = router