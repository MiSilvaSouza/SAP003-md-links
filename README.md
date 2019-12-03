# Markdown Links

Biblioteca executável em linha de comando (CLI) e retorna links de um arquivo .md

## Instalar a biblioteca

```sh
$ npm install -g MiSilvaSouza/SAP003-md-links
```

## Como Usar

### Digite no console:

```sh
$ md-links ./caminho/arquivo.md
```
Se no arquivo houver links, deve retornar:

```sh
text: algo
href: http://link-de-algo.com
```

## Validando os links

### Digite no console:

```sh
$ md-links ./caminho/arquivo.md --validate
```
Deve retornar:

```sh
text: algo
href: http://link-de-algo.com
status: valid
```

