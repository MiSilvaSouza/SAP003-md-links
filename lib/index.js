const fs = require('fs');

function mdlinks(path) {

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const str = data;
        const regex = /\[([^\s].+?)\]\((http[s]?:\/\/[^)]*)\)/gm;
        let match;
        const arrayResult = [];

        while ((match = regex.exec(str)) !== null) {          
          arrayResult.push({text: match[1], href: match[2]});
        }   
        resolve(arrayResult);
      }
    });    
  });  
}

module.exports = mdlinks;
