#!/usr/bin/env node

const https = require("../lib/https-server.js");
const http = require("../lib/http-server");
const jsonHandle = require("../lib/json-read.js");

const readline = require('readline');
const colors = require("colors");
const fs = require("fs");

const pwd = process.env.PWD;

//Initialize Readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Read JSON
jsonHandle.readJson(pwd, function(e) {
    if (e["protocol"] === "https") {
        https.httpsServer(pwd, e)
    } else if (e["protocol"] === "http") {
        http.httpServer(pwd, e)
    }

});

rl.close();