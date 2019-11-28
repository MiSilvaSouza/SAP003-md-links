#! /usr/bin/env node

const mdlinks = require('./index.js');

mdlinks(process.argv[2])
  .then((result) => {   
    console.log(result);   
  })
  .catch(console.error);