var mongoose     = require('mongoose'),
mongooseIntl = require('mongoose-intl'),
Schema       = mongoose.Schema;

var schema = new Schema({
    name_sample : { type: String, intl: true },
    image_sample: String,
    name_fabric:{ type: String, intl: true },
    image_fabric: String,
    id_fabric: String,
});

schema.plugin(mongooseIntl, { languages: ['vn', 'en', 'zh'], defaultLanguage: 'vn' });

module.exports = mongoose.model('product', schema);

