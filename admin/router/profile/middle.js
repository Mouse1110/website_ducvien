
const Model = require("../../../models/profile")

module.exports.get_item = async (req,res) => {
    let datas =await Model.find({})
    if (datas.length==0) datas.push({content:{vn:"",en:"",zh:""}})
    res.json(datas[0]);
}


module.exports.put_item = async (req,res) => {
    let datas =await Model.find({})
    console.log(req.body)
    if (datas.length==0) {
        let data = new Model({
            content:{
                vn:req.body.content_vn,
                en:req.body.content_en,
                zh:req.body.content_zh,
            },
            time_open:req.body.time_open
        })
        let result = await data.save()
        res.redirect('/about');
    } else {
        let  data = new Model({
            content:{
                vn:req.body.content_vn,
                en:req.body.content_en,
                zh:req.body.content_zh,
            },
            time_open:req.body.time_open
        })
            var upsertData = data.toObject();
            delete upsertData._id;
           await Model.updateOne({_id: datas[0]._id}, upsertData, {upsert: true});
           res.redirect('/about');
    }
  
    
}