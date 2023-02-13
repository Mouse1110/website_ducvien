const express = require('express')
const router = express.Router()

const category = [{"_id":"1","name":"Vải Kaki thun","image":"/dist/files/images/kaki.jpg"},
{"_id":"2","name":"Vải Voan","image":"/dist/files/images/voan.jpg"},
{"_id":"3","name":"Vải xốp","image":"/dist/files/images/xop.jpg"}
,{"_id":"4","name":"Vải tổ ong","image":"/dist/files/images/toong.jpg"}
,{"_id":"5","name":"Vải kaki nhung","image":"/dist/files/images/nhung.jpg"}
,{"_id":"6","name":"Vải thun 4 chiều","image":"/dist/files/images/4chieu.jpg"}
,{"_id":"7","name":"Vải xi","image":"/dist/files/images/xi.jpg"}
,{"_id":"8","name":"Vải linen","image":"/dist/files/images/linen.jpg"}
,{"_id":"9","name":"Vải 100D","image":"/dist/files/images/100d.jpg"}]

const category_en = [{"_id":"1","name":"Khaki Elastic Fabric","image":"/dist/files/images/kaki.jpg"},
{"_id":"2","name":"Chiffon Fabric","image":"/dist/files/images/voan.jpg"},
{"_id":"3","name":"Foam Fabric","image":"/dist/files/images/xop.jpg"}
,{"_id":"4","name":"Honeycomb Fabric","image":"/dist/files/images/toong.jpg"}
,{"_id":"5","name":"Khaki Fabric","image":"/dist/files/images/nhung.jpg"}
,{"_id":"6","name":"4-Way Stretch Fabric","image":"/dist/files/images/4chieu.jpg"}
,{"_id":"7","name":"Xi Fabric","image":"/dist/files/images/xi.jpg"}
,{"_id":"8","name":"Linen Fabric","image":"/dist/files/images/linen.jpg"}
,{"_id":"9","name":"Fabric 100D","image":"/dist/files/images/100d.jpg"}]

const product = [{"_id":"1","id_fabric":"1","name_sample":"Blazer nam","image_sample":"/dist/files/images/b1.jpg","name_fabric":"Vải Kaki thun","image_fabric":"/dist/files/images/a1.jpg"},
{"_id":"2","id_fabric":"2","name_sample":"Đầm nữ","image_sample":"/dist/files/images/b2.jpg","name_fabric":"Vải Voan","image_fabric":"/dist/files/images/a2.jpg"},
{"_id":"3","id_fabric":"3","name_sample":"Đầm tím nữ","image_sample":"/dist/files/images/b3.jpg","name_fabric":"Vải xốp","image_fabric":"/dist/files/images/a3.jpg"},
{"_id":"4","id_fabric":"4","name_sample":"Đầm nữ hồng","image_sample":"/dist/files/images/b4.jpg","name_fabric":"Vải tổ ong","image_fabric":"/dist/files/images/a4.jpg"},
{"_id":"5","id_fabric":"5","name_sample":"Áo sơ mi nữ","image_sample":"/dist/files/images/b5.jpg","name_fabric":"Vải kaki nhung","image_fabric":"/dist/files/images/a5.jpg"},
{"_id":"6","id_fabric":"6","name_sample":"Đầm nữ","image_sample":"/dist/files/images/b6.jpg","name_fabric":"Vải thun 4 chiều","image_fabric":"/dist/files/images/a6.jpg"},
{"_id":"7","id_fabric":"7","name_sample":"Áo khoác rin nam","image_sample":"/dist/files/images/b7.jpg","name_fabric":"Vải xi","image_fabric":"/dist/files/images/a7.jpg"},
]
const product_en = [{"_id":"1","id_fabric":"1","name_sample":"Men's Blazers","image_sample":"/dist/files/images/b1.jpg","name_fabric":"Khaki Elastic Fabric","image_fabric":"/dist/files/images/a1.jpg"},
{"_id":"2","id_fabric":"2","name_sample":"Dress","image_sample":"/dist/files/images/b2.jpg","name_fabric":"Chiffon Fabric","image_fabric":"/dist/files/images/a2.jpg"},
{"_id":"3","id_fabric":"3","name_sample":"Women’s purple dress","image_sample":"/dist/files/images/b3.jpg","name_fabric":"Foam Fabric","image_fabric":"/dist/files/images/a3.jpg"},
{"_id":"4","id_fabric":"4","name_sample":"Women's pink dress","image_sample":"/dist/files/images/b4.jpg","name_fabric":"Honeycomb Fabric","image_fabric":"/dist/files/images/a4.jpg"},
{"_id":"5","id_fabric":"5","name_sample":"Women's somi","image_sample":"/dist/files/images/b5.jpg","name_fabric":"Khaki Fabric","image_fabric":"/dist/files/images/a5.jpg"},
{"_id":"6","id_fabric":"6","name_sample":"Dress","image_sample":"/dist/files/images/b6.jpg","name_fabric":"4-Way Stretch Fabric","image_fabric":"/dist/files/images/a6.jpg"},
{"_id":"7","id_fabric":"7","name_sample":"Men's jeans jacket","image_sample":"/dist/files/images/b7.jpg","name_fabric":"Xi Fabric","image_fabric":"/dist/files/images/a7.jpg"},
]



const CategoryModel = require('./models/category')
const ProductModel = require('./models/product')
const NewsModel = require('./models/news')
const RecruitmentModel = require('./models/recruitment')
const ProfileModel = require('./models/profile')
const BannerModel = require('./models/banner')
router.get("/banner",async (req,res)=>{
    let results =await BannerModel.find({})
    res.json(results.map(e=>e.image))
})

router.get("/category",async (req,res)=>{
    let datas =await CategoryModel.find({})
    let results = []
    for (let i = 0 ;i<datas.length -2;i++){
        for (let j = i+1;j<datas.length -1;j++){
            if (datas[i].index>datas[j].index){
                let x = datas[i]
                datas[i] = datas[j]
                datas[j] = x
            }
        }
    }
    results = datas
    if (req.query.l == "" || req.query.l == "vn"){
       return res.json(results.map(e=>({_id:e._id,name:e.get('name.vn'),image:e.image})))
    } 
    res.json(results.map(e=>({_id:e._id,name:e.get('name.en'),image:e.image})))
})


router.get("/product",async (req,res)=>{
    let datas =await ProductModel.find({})
    let results = []
    for (let i = datas.length -1 ;i>=0;i--){
        results.push(datas[i])
    }
    if (req.query.l == "" || req.query.l == "vn"){
       return res.json(results.map(e=>({_id:e._id,
        name_fabric:e.get('name_fabric.vn'),
       image_fabric:"/"+e.image_fabric,
       name_sample:e.get('name_sample.vn'),
       image_sample:"/"+e.image_sample,
       id_fabric:e.id_fabric,})))
    } 
    res.json(results.map(e=>({_id:e._id,
        name_fabric:e.get('name_fabric.en'),
       image_fabric:"/"+e.image_fabric,
       name_sample:e.get('name_sample.en'),
       image_sample:"/"+e.image_sample,
       id_fabric:e.id_fabric,})))
})


router.get("/product/:id",async (req,res)=>{
    let e = await ProductModel.findOne({_id:req.params.id})
    console.log(e)
    if (req.query.l == "" || req.query.l == "vn"){
        return res.json({_id:e._id,
            name_fabric:e.get('name_fabric.vn'),
           image_fabric:"/"+e.image_fabric,
           name_sample:e.get('name_sample.vn'),
           image_sample:"/"+e.image_sample,
           id_fabric:e.id_fabric,})
     } 
     res.json({_id:e._id,
        name_fabric:e.get('name_fabric.en'),
       image_fabric:"/"+e.image_fabric,
       name_sample:e.get('name_sample.en'),
       image_sample:"/"+e.image_sample,
       id_fabric:e.id_fabric,})
})

router.get("/profile",async (req,res)=>{
    let e = await ProfileModel.findOne({})
    if (req.query.l == "" || req.query.l == "vn"){
        return res.json({_id:e._id,
            content:e.get('content.vn'),time_open:e.time_open})
     } 
     res.json({_id:e._id,
        content:e.get('content.en'),time_open:e.time_open})
})

router.get("/news",async (req,res)=>{
    let datas =await NewsModel.find({})
    let results = []
    for (let i = datas.length -1 ;i>=0;i--){
        results.push(datas[i])
    }
    if (req.query.l == "" || req.query.l == "vn"){
       return res.json(results.map(e=>({_id:e._id,name:e.get('name.vn'),content:e.get('content.vn'),image:e.image})))
    } 
    res.json(results.map(e=>({_id:e._id,name:e.get('name.en'),content:e.get('content.en'),image:e.image})))
})

router.get("/news/:id",async (req,res)=>{
    let e = await NewsModel.findOne({_id:req.params.id})
    if (req.query.l == "" || req.query.l == "vn"){
        return res.json({_id:e._id,name:e.get('name.vn'),content:e.get('content.vn'),image:e.image})
     } 
     res.json({_id:e._id,name:e.get('name.en'),content:e.get('content.en'),image:e.image})
})


router.get("/recruitment",async (req,res)=>{
    let datas =await RecruitmentModel.find({})
    let results = []
    for (let i = datas.length -1 ;i>=0;i--){
        results.push(datas[i])
    }
    if (req.query.l == "" || req.query.l == "vn"){
       return res.json(results.map(e=>({_id:e._id,name:e.get('name.vn'),content:e.get('content.vn'),image:e.image})))
    } 
    res.json(results.map(e=>({_id:e._id,name:e.get('name.en'),content:e.get('content.en'),image:e.image})))
})

router.get("/recruitment/:id",async (req,res)=>{
    let e = await RecruitmentModel.findOne({_id:req.params.id})
    if (req.query.l == "" || req.query.l == "vn"){
        return res.json({_id:e._id,name:e.get('name.vn'),content:e.get('content.vn'),image:e.image})
     } 
     res.json({_id:e._id,name:e.get('name.en'),content:e.get('content.en'),image:e.image})
})

module.exports = router