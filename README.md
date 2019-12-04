# Markdown Links

Biblioteca executável em CLI (Command Line Interface - Interface de Linha de Comando) e retorna links de um arquivo .md


## Instalar a biblioteca

```sh
$ npm install -g MiSilvaSouza/SAP003-md-links
```

Na instalação pode ocorrer um erro de permissão e você precise de autorização de administrador. Se acontecer, instale da seguinte forma:

```sh
$ sudo npm install -g MiSilvaSouza/SAP003-md-links
```

## Como Usar

### Arquivo .js

Para utilizar em seus projetos JavaScript, faça da seguinte forma:

```js
const mdLinks = require("md-links");

mdLinks(path, option)
  .then(links => {
    console.log(links);
  })
  .catch(console.error);
```
`path`: Rota absoluta ou relativa ao arquivo.

`option`: Um objeto com a propriedade `validate` (um booleano que determina a validação dos links encontrados).
  
### CLI (Command Line Interface - Interface de Linha de Comando)

No console, digite:

```sh
$ md-links ./caminho/arquivo.md
```
Se no arquivo houver links, deve retornar:

```sh
text: algo
href: http://link-de-algo.com
```

### Validando os links

No console, digite:

```sh
$ md-links ./caminho/arquivo.md --validate
```
Deve retornar:

```sh
text: algo
href: http://link-de-algo.com
status: valid
```

# Recursos Utilizados

* [Node.js](https://nodejs.org/)
* [node-fetch](https://www.npmjs.com/package/node-fetch)
* [fs](https://nodejs.org/api/fs.html)
* [eslint](https://eslint.org/)
* [jest](https://jestjs.io/)

