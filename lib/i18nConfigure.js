'use strict';

const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['English', 'Spanish'],
  directory: path.join(__dirname, '..', 'locales'),
  defaultLocale: 'English',
  autoReload: true, // Watch for changes in JSON files to reload locale on updates - defaults to false
  syncFiles: true, // Sync locale information across all files
  cookie: 'nodepop-locale'
});

// para utilizar en scripts
i18n.setLocale('English');

module.exports = i18n;