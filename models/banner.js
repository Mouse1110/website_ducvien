var mongoose     = require('mongoose'),
mongooseIntl = require('mongoose-intl'),
Schema       = mongoose.Schema;

var schema = new Schema({
    image: String,
});

schema.plugin(mongooseIntl, { languages: ['vn', 'en', 'zh'], defaultLanguage: 'vn' });

module.exports = mongoose.model('banner', schema);

