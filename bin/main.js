#!/usr/bin/env node

const mainServer = require("../lib/app.js");
const readline = require('readline');
const colors = require("colors");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.question('Type file name; Default:index.html \n ' .cyan, function(file){
    mainServer.myServer(process.env.PWD, file);
    rl.close();
});
