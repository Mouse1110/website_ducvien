
const NewsModel = require("../../../models/news")

module.exports.get_item = async (req,res) => {
    let datas =await NewsModel.find({})
    let results = []
    for (let i = datas.length -1 ;i>=0;i--){
        results.push(datas[i])
    }
    res.json(results);
}


module.exports.post_item = async (req,res) => {
    var file = req.file;
    if (!file) return res.send();
    let data = new NewsModel({
        name:{
            vn:req.body.name_vn,
            en:req.body.name_en,
            zh:req.body.name_zh,
        },
        image:file.filename,
        content:{
            vn:req.body.name_vn,
            en:req.body.name_en,
            zh:req.body.name_zh,
        },
    })
    let result = await data.save()
    res.send(); 
}


module.exports.put_item = async (req,res) => {
    console.log(req.body)
    var file = req.file;
    if (!req.params.id) return res.send();
    let news = await NewsModel.findOne({_id:req.params.id})
        if (!news) return res.send();
        let data
        if (file){   
           
            data = new NewsModel({
                name:{
                    vn:req.body.name_vn,
                    en:req.body.name_en,
                    zh:req.body.name_zh,
                },
                image:file.filename,
                content:{
                    vn:req.body.content_vn,
                    en:req.body.content_en,
                    zh:req.body.content_zh,
                },
            })
        } else {
            data = new NewsModel({
                name:{
                    vn:req.body.name_vn,
                    en:req.body.name_en,
                    zh:req.body.name_zh,
                },
                image:news.image,
                content:{
                    vn:req.body.content_vn,
                    en:req.body.content_en,
                    zh:req.body.content_zh,
                },
            })
        }

        var upsertData = data.toObject();
        delete upsertData._id;
       await NewsModel.updateOne({_id: req.body.id}, upsertData, {upsert: true});
        return res.send();
    
}


module.exports.delete_item = async (req,res) => {
    await NewsModel.findByIdAndRemove(req.params.id);
    res.send();
}