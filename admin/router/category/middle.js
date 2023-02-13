const Model = require("../../../models/category")

module.exports.get_item = async (req,res) => {
    let datas =await Model.find({})
    for (let i = 0 ;i<datas.length -2;i++){
        for (let j = i+1;j<datas.length -1;j++){
            if (datas[i].index>datas[j].index){
                let x = datas[i]
                datas[i] = datas[j]
                datas[j] = x
            }
        }
    }
    res.json(datas);
}

module.exports.sort_item = async (req,res) => {
    if (!req.body.ids) return res.send();
    console.log(req.body.ids)
    for (let i =0;i<req.body.ids.length;i++){
        await Model.updateOne({_id:req.body.ids[i]},{$set:{index:i}})
    }
    res.send();
}

module.exports.post_item = async (req,res) => {
    var file = req.file;
    console.log(file)
    if (!file) return res.redirect('/');
    let data = new Model({
        name:{
            vn:req.body.name_vn,
            en:req.body.name_en,
            zh:req.body.name_zh,
        },
        image:file.filename,
    })
    let result = await data.save()
    res.redirect('/');
}

module.exports.put_item = async (req,res) => {
    console.log(req.body)
    var file = req.file;
    if (!req.body.id) return res.redirect('/');
    let news = await Model.findOne({_id:req.body.id})
        if (!news) return res.redirect('/');
        let data
        if (file){   
           
            data = new Model({
                name:{
                    vn:req.body.name_vn,
                    en:req.body.name_en,
                    zh:req.body.name_zh,
                },
                image:file.filename,
            })
        } else {
            data = new Model({
                name:{
                    vn:req.body.name_vn,
                    en:req.body.name_en,
                    zh:req.body.name_zh,
                },
                image:news.image,
            })
        }

        var upsertData = data.toObject();
        delete upsertData._id;
       await Model.updateOne({_id: req.body.id}, upsertData, {upsert: true});
        return res.redirect('/');
    
}


module.exports.delete_item = async (req,res) => {
    await Model.findByIdAndRemove(req.params.id);
    res.send();
}