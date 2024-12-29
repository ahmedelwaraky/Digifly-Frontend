const path = require('path');

module.exports = {
  i18n: {
    locales: ['en','ar'], // Supported locales
    defaultLocale: 'en',         // Default language
  },
  localePath: path.resolve('./public/locales'), // Path to translation files
};
