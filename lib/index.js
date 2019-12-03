const fs = require('fs');
const fetch = require('node-fetch');

function mdlinks(path, option) {

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const str = data;
        const regex = /\[([^\s].+?)\]\((http[s]?:\/\/[^)]*)\)/gm;
        let match;
        const result = [];

        while ((match = regex.exec(str)) !== null) {          
          result.push({text: match[1], href: match[2]});
        }
        if (option) {
          Promise.all(result.map((item) => fetch(item.href)
            .then((link) => item.status = link.status)                               
          ))
            .then(() => resolve(result))
          ;
        } else {
          resolve(result);
        }       
      }
    });    
  });  
}

module.exports = mdlinks;
