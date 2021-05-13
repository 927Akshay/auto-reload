# web-server

## Installation

Use the [npm](https://npmjs.com) to install web-server.

```bash
npm i @927akshay/web-server -g
```

## Overview

This is a simple and light weight npm package that is of great help to developers. It automatically reloads the webpage on watching any change in the working directory. It also watches for change in the subdirectories also.

## Usage
Navigate to your working directory and type `web-server`
```bash
> web-server (# On windows)
$ web-server (# On Linux & macOS)
Type file name; Default:index.html
Sever started on port 8080
```
By default it serves the `index.html` file on the root route `localhost:8080/`. If you want to serve another file on home route type the file name (like : `main.html`) on the promt after typing `web-server` and hit enter

``` bash
> web-server (# On windows) [hit enter]
$ web-server (# On Linux & macOS) [hit enter]
Type file name; Default:index.html
main.html
Sever started on port 8080
```
## Errors
It logs an error if it cannot find the requested file

## Updates
I will release updates as often as possible. Currently it supports `http` and `https` protocol .
> If you have any suggestions please do leave them on the [github page](https://github.com/927Akshay/web-server/issues)

## License
ISC