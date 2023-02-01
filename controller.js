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

const product = [{"_id":"1","id_fabric":"1","name_sample":"Blazer nam","image_sample":"/dist/files/images/b1.jpg","name_fabric":"Vải Kaki thun","image_fabric":"/dist/files/images/a1.jpg"},
{"_id":"2","id_fabric":"2","name_sample":"Đầm nữ","image_sample":"/dist/files/images/b2.jpg","name_fabric":"Vải Voan","image_fabric":"/dist/files/images/a2.jpg"},
{"_id":"3","id_fabric":"3","name_sample":"Đầm tím nữ","image_sample":"/dist/files/images/b3.jpg","name_fabric":"Vải xốp","image_fabric":"/dist/files/images/a3.jpg"},
{"_id":"4","id_fabric":"4","name_sample":"Đầm nữ hồng","image_sample":"/dist/files/images/b4.jpg","name_fabric":"Vải tổ ong","image_fabric":"/dist/files/images/a4.jpg"},
{"_id":"5","id_fabric":"5","name_sample":"Áo sơ mi nữ","image_sample":"/dist/files/images/b5.jpg","name_fabric":"Vải kaki nhung","image_fabric":"/dist/files/images/a5.jpg"},
{"_id":"6","id_fabric":"6","name_sample":"Đầm nữ","image_sample":"/dist/files/images/b6.jpg","name_fabric":"Vải thun 4 chiều","image_fabric":"/dist/files/images/a6.jpg"},
{"_id":"7","id_fabric":"7","name_sample":"Áo khoác rin nam","image_sample":"/dist/files/images/b7.jpg","name_fabric":"Vải xi","image_fabric":"/dist/files/images/a7.jpg"},
]

router.get("/banner",async (req,res)=>{
    res.json(['/dist/files/icons/banner-01.png','/dist/files/icons/banner-02.png','/dist/files/icons/banner-03.png','/dist/files/icons/banner-04.png','/dist/files/icons/banner-05.png'])
})

router.get("/category",async (req,res)=>{
    res.json(category)
})


router.get("/product",async (req,res)=>{
    res.json(product)
})

router.get("/product/:id",async (req,res)=>{
    let item = product.find(e=>e._id==req.params.id);
    res.json(item)
})

router.get("/profile",async (req,res)=>{
    res.json({"content":`Cửa hàng vải Đức Viên tích hợp phát triển kinh doanh và sản xuất. Chuyên cung cấp các loại vải may mặc thời trang sỉ lẻ trên toàn quốc.Với hơn 1000 mặt hàng sản phẩm kinh doanh chính : vải thời trang, dệt thoi, dệt kim, áo sơ mi, áo gió, quần tây, vest công sở, đồ ngủ, jacquard, thun co giãn 4 chiều, vải jean, vải cotton.....
    Ngoài ra, cửa hàng còn có xưởng riêng chuyên dệt,in và nhuộm để phục vụ theo nhu cầu của khách hàng .
    Cửa hàng vải Đức Viên rất hân hạnh được tư vấn và hợp tác lâu dài cùng quý đối tác.`})
})


module.exports = router