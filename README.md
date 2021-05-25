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
found web-server.json
Sever started on port 3000
```
By default it serves the `index.html` file on the root route `localhost:3000/`. If you want to serve another file on home route edit web-server.json's "/" key to the file name

``` bash
> web-server (# On windows) [hit enter]
$ web-server (# On Linux & macOS) [hit enter]
found web-server.json
Sever started on port 3000
```
## Errors
It logs an error if it cannot find the requested file

## Updates
I will release updates as often as possible. Currently it supports `http` and `https` protocol .
> If you have any suggestions please do leave them on the [github page](https://github.com/927Akshay/web-server/issues)

## JSON
It tries to find web-server.json file in the working directory. If it does not find one it creates it. 
### Protocol
Specifies the protocol to serve with: `http` & `https`  
Datatype: `String`

### Port
Specify the port to listen to. It enable you to have many running servers on differt ports.  
 Datatype: `Integer` 

### S-Port
Specify the socket port to listen to. It enable you to have many running servers on differt socket ports. It is advised to have it one more than the `port` value   
Datatype: `Integer`

### /
The file to serve on home route. Specify a file path. Defaults to index.html in working directory. Use `//` instead of a single `/`  
Datatype: `String`

## License
ISC