var mongoose     = require('mongoose'),
mongooseIntl = require('mongoose-intl'),
Schema       = mongoose.Schema;

var schema = new Schema({
    time_open: String,
    content: { type: String, intl: true },
});

schema.plugin(mongooseIntl, { languages: ['vn', 'en', 'zh'], defaultLanguage: 'vn' });

module.exports = mongoose.model('profile', schema);

