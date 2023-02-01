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

router.get("/banner",async (req,res)=>{
    res.json(['/dist/files/icons/banner-01.png','/dist/files/icons/banner-02.png','/dist/files/icons/banner-03.png','/dist/files/icons/banner-04.png','/dist/files/icons/banner-05.png'])
})

router.get("/category",async (req,res)=>{
    if (req.query.l == "" || req.query.l == "vn"){
       return res.json(category)
    } 
   return res.json(category_en)
})


router.get("/product",async (req,res)=>{
    if (req.query.l == "" || req.query.l == "vn"){
        return res.json(product)
     } 
    return res.json(product_en)
})

router.get("/product/:id",async (req,res)=>{
    if (req.query.l == "" || req.query.l == "vn"){
        let item = product.find(e=>e._id==req.params.id); 
        return res.json(item)
     } 
     let item = product_en.find(e=>e._id==req.params.id); 
     res.json(item)
})

router.get("/profile",async (req,res)=>{
    if (req.query.l == "" || req.query.l == "vn"){
        return res.json({"content":`Công ty TNHH Dệt may Đức Viên được thành lập vào năm 2008. Công ty có trụ sở chính tại tỉnh Chiết Giang, Trung Quốc, tập trung vào phát triển và kinh doanh hàng dệt may. Sản phẩm của công ty chủ yếu được bán ở Trung Quốc, Việt Nam, Trung Đông, Nam Phi, Hoa Kỳ, Đông Nam Á và các nước khác. Kể từ khi thành lập, công ty đã thiết lập mối quan hệ hợp tác lâu dài và ổn định với nhiều thương hiệu thời trang Trung Quốc.Với chất lượng sản phẩm tuyệt vời, giá cả hợp lý và dịch vụ hoàn hảo, nhanh chóng, công ty đã giành được sự tin tưởng của khách hàng trong và ngoài nước, hoạt động kinh doanh xuất khẩu của công ty đã phát triển liên tục.

        Công ty chúng tôi luôn coi chất lượng sản phẩm là sự sống của công ty, từ khi thành lập đến nay đã rất chú trọng đến tiêu chuẩn chất lượng, yêu cầu khắt khe về công nghệ sản xuất, phấn đấu đi trước các công ty khác một bước trong việc phát triển sản phẩm mới, hình thành nên những đặc điểm, lợi thế của công ty.
        
        Các loại vải chính của công ty bao gồm: dệt thoi, dệt kim, sơ mi, áo gió, voan, nhung, quần tây, vest công sở, in, jacquard, nhuộm sợi, denim, thun ni lông, kaki cotton, v.v., với đầy đủ chủng loại.
        
        Công ty đã tuân thủ triết lý kinh doanh "khách hàng là trên hết, dịch vụ tốt nhất" từ đầu đến cuối và hoan nghênh khách hàng đến công ty chúng tôi để đàm phán! Như mọi khi, chúng tôi sẽ cải thiện các tiêu chuẩn dịch vụ của mình bằng các hành động thiết thực và cùng nhau tạo ra một tình huống đôi bên cùng có lợi!.`})
     } 
    res.json({"content":`Deyuan Textile Co., Ltd. was established in 2008. The company is headquartered in Zhejiang province, China, focusing on developing and trading textiles. The company's products are mainly sold in China, Vietnam, the Middle East, South Africa, the United States, Southeast Asia and other countries. Since its establishment, the company has established long-term and stable cooperative relationship with many Chinese fashion brands. With excellent product quality, reasonable price and perfect, prompt service , the company has won the trust of domestic and foreign customers, the company's export business has developed continuously.

    Our company always considers product quality as the life of the company, since its establishment, it has paid great attention to quality standards, strict requirements on production technology, strive to be one step ahead of other companies in developing new products, forming the characteristics and advantages of the company.
    
    The company's main fabrics include: woven, knitted, shirt, windbreaker, chiffon, velvet, trousers, work vest, printed, jacquard, yarn dyed, denim, nylon spandex, khaki cotton, etc. , with a full range.
    
    The company has been adhering to the "customer first, best service" business philosophy from beginning to end, and welcome customers to our company for negotiation! As always, we will improve our service standards with practical actions and create a win-win situation together!`})
})


module.exports = router