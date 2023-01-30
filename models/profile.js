var mongoose     = require('mongoose'),
mongooseIntl = require('mongoose-intl'),
Schema       = mongoose.Schema;

var schema = new Schema({
    time_open: String,
    address: { type: String, intl: true },
    gpkd: String,
    date_range: String,
    address_range: String,
    content: { type: String, intl: true },
    hotlines:Array,
    zalo: String,
    facebook: String,
    createdAt: { type: Date, default: Date.now },
});

schema.plugin(mongooseIntl, { languages: ['vn', 'en', 'zh'], defaultLanguage: 'vn' });

module.exports = mongoose.model('profile', schema);

