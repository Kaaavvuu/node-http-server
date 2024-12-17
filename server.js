const http = require('http');

const port = 4100;

const fs = require('fs');
const requestHandler = (req,res) =>{
    console.log(req.url)
    let fileName = ''
    switch (req.url) {
        case '/':
            fileName = 'index.html';
            break;
    case'/about':
            fileName = 'about.html';
            break;
    case'/contact':
            fileName = 'contact.html';
            break;
        default:
            fileName = 'Error.html'
    }
    fs.readFile(fileName, (err, result) =>{
        if (!err){
            res.end(result)
        }
    })
}

const server = http.createServer(requestHandler);

server.listen(port, (err)=> {
    if (err) {
        console.log("server Not Started...");
        return false;
    }
    console.log("Server Started....")
    console.log("http://localhost:"+port)
})