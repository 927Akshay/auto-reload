# auto-reload

## Installation

Use the [npm](https://npmjs.com) to install auto-reload.

```bash
npm i auto-reload -g
```

## Overview

This is a simple and light weight npm package that is of great help to developers. It automatically reloads the webpage on watching any change in the working directory. It also watches for change in the subdirectories also.

## Usage
Navigate to your working directory and type `auto-reload`
```bash
> auto-reload (# On windows)
$ auto-reload (# On Linux & macOS)
Type file name; Default:index.html
Sever started on port 8080
```
By default it serves the `index.html` file on the root route `localhost:8080/`. If you want to serve another file on home route type the file name (like : `main.html`) on the promt after typing `auto-reload` and hit enter

``` bash
> auto-reload (# On windows) [hit enter]
$ auto-reload (# On Linux & macOS) [hit enter]
Type file name; Default:index.html
main.html
Sever started on port 8080
```
## Errors
It logs an error if it cannot find the requested file

## Updates
I will release updates as often as possible. Currently it supports `http` protocol only.
> `https` will be supported soon

## License
ISC