'Use strict';
const entries = require('./webpack.entries');
module.exports = [];
module.exports.push(entries.createDevClientEntry());