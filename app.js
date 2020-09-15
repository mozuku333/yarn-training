'use strict';
const axious = require('axios');
axious.get('https://www.google.com').then(res => {
  console.log(res.data);
});