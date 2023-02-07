const multer = require('multer');
const uniqid = require('uniqid')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname +'-'  + uniqid() + '.png')
    }
  })

var upload = multer({ storage: storage })

module.exports = upload;