const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
module.exports = mongoose.connect("mongodb+srv://liliang:le2MS6U1NF434cSd@cluster0.a4dtz.mongodb.net/liliang?retryWrites=true&w=majority",function(err){
    if (err){
        console.log('err: ',err);
    }else{
        console.log('server mongo connected success');
    }
});