const fs = require("fs");
const colors = require("colors");

function readJson(pwd, createServer) {
    var returnVar;

    // try to read file
    fs.readFile(pwd + "/web-server.json", "utf8", function(err, data) {
        //handle error
        if (err) {
            console.log("web-server.json not found".red);
            console.log("Creating file".green);

            //copy and create file
            fs.copyFile(__dirname + '/web-server.json', pwd + "/web-server.json", function(err) {
                if (err) {
                    // if error log it
                    console.log(err);
                } else {
                    console.log("Created file web-server.json".green);
                    //read created file

                    fs.readFile(pwd + "/web-server.json", 'utf8', function(err, data) {
                        if (err) {
                            // if error log it
                            console.error(err);
                        } else {
                            var jsonString = JSON.parse(data)
                            createServer(jsonString)
                        }
                    })


                };
            });
        }
        //if success send data
        else {
            console.log("found web-server.json".green);
            fs.readFile(pwd + "/web-server.json", 'utf8', function(err, data) {
                if (err) {
                    console.log(err.red);
                } else {

                    var jsonString = JSON.parse(data)
                    createServer(jsonString);
                }
            });
        }
    });


};


exports.readJson = readJson;