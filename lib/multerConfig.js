'use strict';

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const route = path.join(__dirname, '..', 'public');
    cb(null, route);
  },
  filename: function(req, file, cb) {
    const filename ='/images/' + file.fieldname + '-' + Date.now() + '-' + file.originalname;
    cb(null, filename);
  }
});

module.exports = multer({ storage });