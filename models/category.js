var mongoose     = require('mongoose'),
mongooseIntl = require('mongoose-intl'),
Schema       = mongoose.Schema;

var schema = new Schema({
    name : { type: String, intl: true },
    image: String,
    index:Number,
});

schema.plugin(mongooseIntl, { languages: ['vn', 'en', 'zh'], defaultLanguage: 'vn' });

module.exports = mongoose.model('category', schema);

