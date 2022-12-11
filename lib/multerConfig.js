'use strict';

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const rute = path.join(__dirname, '..', 'public');
    cb(null, rute);
  },
  filename: function(req, file, cb) {
    const filename ='/images/' + file.fieldname + '-' + Date.now() + '-' + file.originalname;
    cb(null, filename);
  }
});

module.exports = multer({ storage });