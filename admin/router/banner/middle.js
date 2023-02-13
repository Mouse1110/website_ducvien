const Model = require("../../../models/banner")

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
    if (!file) return res.redirect('/banner');
    let data = new Model({
        image:file.filename,
    })
    let result = await data.save()
    res.redirect('/banner');
}

module.exports.delete_item = async (req,res) => {
    await Model.findByIdAndRemove(req.params.id);
    res.send();
}