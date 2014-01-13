veJSTools
=========

## Description

vejstools is a CLI tool that uses the [veJSTools-lib](https://github.com/varemenos/vejstools-lib) library

## Usage

```js
vejstools -option [option-parameter]
```

options:

* `-h` or `--help`, help
* `-e` or `--encoding`, base64 encoding
* `-d` or `--decoding`, base64 decoding
* `--encodeUnicode`, unicode encoding
* `--decodeUnicode`, unicode decoding

### examples

encode a string:

```js
vejstools -e "hello world"
=>
aGVsbG8gd29ybGQ=
```

decode a string:

```js
vejstools -d aGVsbG8gd29ybGQ=
=>
hello world
```

multiple options:
```js
vejstools -e "hello world" -d aGVsbG8gd29ybGQ=
=>
aGVsbG8gd29ybGQ=
hello world
```
