const express = require('express')
const router = express.Router()
const middleware = require("./product_middle")

const upload = require("../../utils/multer")
const uploadVideo = require("../../utils/multer-video")
router.get("/",middleware.all_category_get)
router.get("/:id",middleware.category_get)
router.post("/",upload.any('image'),middleware.category_post)
router.post("/sort/data",middleware.category_sort)
router.put("/:id",middleware.category_put)
router.delete("/:id",middleware.category_delete)

/// product
router.get("/product/:id",middleware.all_product_get)
router.get("/product/:id/data/:idProduct",middleware.product_get)
router.post("/product",upload.single("image"),middleware.product_post)
router.put("/product/:id",middleware.product_put)
router.delete("/:id/product/:idProduct",middleware.product_delete)

/// example
router.get("/example/data",middleware.all_example_get)
router.get("/example/data/:id",middleware.example_get)
router.post("/example",upload.single("image"),middleware.example_post)
router.delete("/example/:id",middleware.example_delete)
router.post("/video",uploadVideo.any('video'),(req,res)=>{
    res.send(true)
})

module.exports = router