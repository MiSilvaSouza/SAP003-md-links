const mdlinks = require('../index.js');

const resultTest = [
  {text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown'},
  {text: 'Node.js', href: 'https://nodejs.org/'},
];

describe('mdlinks', () => {
  it('É uma função', () => {
    expect(typeof mdlinks).toBe('function');
  });
  it('Retorna array com objeto mostrando text e href de um arquivo .md', (done) => {
    mdlinks('./lib/__tests__/TEST.md')
      .then(result => {
        expect(result).toEqual(resultTest);
        done();
      });
  });
  it('Retorna um erro', (done) => {
    mdlinks('./lib/__tests__/TES.md')
      .catch(result => {
        expect(result).toEqual("Error: ENOENT: no such file or directory, open './lib/__tests__/TES.md'");
        done();
      });
  });
});

