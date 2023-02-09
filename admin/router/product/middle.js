
const Model = require("../../../models/product")

module.exports.get_item = async (req,res) => {
    let datas =await Model.find({})
    let results = []
    for (let i = datas.length -1 ;i>=0;i--){
        results.push(datas[i])
    }
    res.json(results);
}


module.exports.post_item = async (req,res) => {
    var files = req.files;
    if (!files) return res.redirect('/product');
    let data = new Model({
        name_sample:{
            vn:req.body.name_sample_vn,
            en:req.body.name_sample_en,
            zh:req.body.name_sample_zh,
        },
        image_sample:files[0].filename,
        name_fabric:{
            vn:req.body.name_fabric_vn,
            en:req.body.name_fabric_en,
            zh:req.body.name_fabric_zh,
        },
        image_fabric:files[1].filename,
        id_fabric:req.body.id_fabric
    })
    let result = await data.save()
    res.redirect('/product');
}


module.exports.put_item = async (req,res) => {
    console.log(req.body)
    var files = req.files;
    if (!req.body.id) return res.redirect('/product');
    let news = await Model.findOne({_id:req.body.id})
        if (!news) return res.redirect('/product');
        let data
        if (files.length>0){   
           
            data = new Model({
                name_sample:{
                    vn:req.body.name_sample_vn,
                    en:req.body.name_sample_en,
                    zh:req.body.name_sample_zh,
                },
                image_sample:files[0].filename,
                name_fabric:{
                    vn:req.body.name_fabric_vn,
                    en:req.body.name_fabric_en,
                    zh:req.body.name_fabric_zh,
                },
                image_fabric:files[1].filename,
                id_fabric:req.body.id_fabric
            })
        } else {
            data = new Model({
                name_sample:{
                    vn:req.body.name_sample_vn,
                    en:req.body.name_sample_en,
                    zh:req.body.name_sample_zh,
                },
                image_sample:news.image_sample,
                name_fabric:{
                    vn:req.body.name_fabric_vn,
                    en:req.body.name_fabric_en,
                    zh:req.body.name_fabric_zh,
                },
                image_fabric:news.image_fabric,
                id_fabric:req.body.id_fabric
            })
        }

        var upsertData = data.toObject();
        delete upsertData._id;
       await Model.updateOne({_id: req.body.id}, upsertData, {upsert: true});
        return res.redirect('/product');
    
}


module.exports.delete_item = async (req,res) => {
    await Model.findByIdAndRemove(req.params.id);
    res.send();
}