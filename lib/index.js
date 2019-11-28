const fs = require('fs');

function mdlinks(path) {

  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const str = data.toString();
        const regex = /\[([^\s].+?)\]\((http[s]?:\/\/[^)]*)\)/gm;
        let m;
        const arrayResult = [];

        while ((m = regex.exec(str)) !== null) {
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          arrayResult.push({text: m[1], href: m[2]});
        }   
        resolve(arrayResult);
      }
    });    
  });  
}

module.exports = mdlinks;
