const Model = require("../../../models/category")

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
    console.log(file)
    if (!file) return res.redirect('http://localhost:5002/');
    let data = new Model({
        name:{
            vn:req.body.name_vn,
            en:req.body.name_en,
            zh:req.body.name_zh,
        },
        image:file.filename,
    })
    let result = await data.save()
    res.redirect('http://localhost:5002/');
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