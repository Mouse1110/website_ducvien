var mongoose     = require('mongoose'),
mongooseIntl = require('mongoose-intl'),
Schema       = mongoose.Schema;

var schema = new Schema({
    address: String,
    address_range: String,
    content: { type: String, intl: true },
    hotlines:String,
    zalo: String,
    facebook: String,
});

schema.plugin(mongooseIntl, { languages: ['vn', 'en', 'zh'], defaultLanguage: 'vn' });

module.exports = mongoose.model('profile', schema);

