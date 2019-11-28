const mdlinks = require('../index.js');

const resultTest = [
  {text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown'},
  {text: 'Node.js', href: 'https://nodejs.org/'},
];

describe('mdlinks', () => {
  it('is a function', () => {
    expect(typeof mdlinks).toBe('function');
  });
  it('Should return resultTest', (done) => {
    mdlinks('./TEST.md')
      .then(result => {
        expect(result).toEqual(resultTest);
        done();
      });
  });
  it('Should return an error', (done) => {
    mdlinks('./TES.md')
      .catch(result => {
        expect(result).toEqual("Error: ENOENT: no such file or directory, open './TES.md'");
        done();
      });
  });
});

