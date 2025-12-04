const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 3000;

function printPage(file, req, res) {

}


const server = http.createServer((req, res) => {

    if (req.url === '/') {

        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, 'utf8', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error reading the HTML file.\n');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
    
    // Message d'erreur de route (404)
    else {
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Document not found!\n');
    }
});



server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});