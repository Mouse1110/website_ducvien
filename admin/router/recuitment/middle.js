const Model = require("../../../models/recruitment")

module.exports.get_item = async (req,res) => {
    let datas =await Model.find({})
    let results = []
    for (let i = datas.length -1 ;i>=0;i--){
        results.push(datas[i])
    }
    res.json(results);
}

module.exports.post_item = async (req,res) => {
    var file = req.file;
    if (!file) return res.redirect('/recruitment');
    let data = new Model({
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
    let result = await data.save()
    res.redirect('/recruitment');
}

module.exports.put_item = async (req,res) => {
    console.log(req.body)
    var file = req.file;
    if (!req.body.id) return res.redirect('/recruitment');
    let news = await Model.findOne({_id:req.body.id})
        if (!news) return res.redirect('/recruitment');
        let data
        if (file){   
           
            data = new Model({
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
            data = new Model({
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
       await Model.updateOne({_id: req.body.id}, upsertData, {upsert: true});
        return res.redirect('/recruitment');
    
}


module.exports.delete_item = async (req,res) => {
    await Model.findByIdAndRemove(req.params.id);
    res.send();
}