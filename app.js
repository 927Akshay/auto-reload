const http = require('http');
const fs = require('fs');
const websockets = require('websockets');
const path = require('path');
var ar = process.argv;
console.log(ar);

const reloadScript = "<script>const socket = new WebSocket('ws://localhost:80'+document.location.pathname);socket.addEventListener('open', function (event) {}); socket.addEventListener('message', function (event) {if  (event.data==='Reload'){ location.reload(); };});</script> </html>"

http.createServer(function(request, response) {

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    };

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
          console.log(error);
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            };
        };
        if(content){
           if (contentType==='text/html'){
               content = String(content);
               content1 = content.replace("</html>" , reloadScript);
               response.writeHead(200, { 'Content-Type': contentType });
               response.end(content1, 'utf-8');
            }else{
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            }  
        };
    });

}).listen(8080);

var server = websockets.createServer();
server.on('connect', function(socket) {
fs.watch(__dirname , {recursive :true}, function(){
    socket.send("Reload");
});
}).listen(80);
