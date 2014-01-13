veJSTools
=========

## Description

vejstools is a CLI tool that uses the [veJSTools-lib](https://github.com/varemenos/vejstools-lib) library

## CLI

### Shebang
This node.js script file contains a node.js [shebang](http://en.wikipedia.org/wiki/Shebang_(Unix)) and therefore can be executed by the terminal emulator without the need of prefixing your commands with `node`. So if you are not interested in installing the CLI tool via npm, you can still use it by calling it directly (`./cli`) (or `cli` if you've added it in your `$PATH`).

### Usage

```js
cli -option [option-parameter]
```

options:

* `-e` or `--encoding`, base64 encoding
* `-d` or `--decoding`, base64 decoding

### examples

encode a string:

```js
cli -e "hello world"
=>
aGVsbG8gd29ybGQ=
```

decode a string:

```js
cli -d aGVsbG8gd29ybGQ=
=>
hello world
```

multiple options:
```js
cli -e "hello world" -d aGVsbG8gd29ybGQ=
=>
aGVsbG8gd29ybGQ=
hello world
```
