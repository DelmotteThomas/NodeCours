// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const PORT = 3000;

// const server = http.createServer((req, res) => {

//     // Definir la route permettant l'affichage d'un message HTML
//     if (req.url === '/') {
        
//         // Lecture de la source HTML
//         const filePath = path.join(__dirname, 'index.html');

//         fs.readFile(filePath, 'utf8', (err, data) => {
//             // SORTIR AU plus vite de la fonction en cas d'erreur donc d'abord 
//             // gestion des erreurs version 2

//             // if (!err) {
//             //     // Definition des entete de réponse
//             //     res.statusCode = 200;
//             //     res.setHeader('Content-Type', 'text/html');
//             //     // Envoi du corps de la réponse
//             //     res.end(data);
//             // } 
            
//             // // Message en cas d'erreur de lecture de la source HTML
//             // else {
//             //     res.statusCode = 500;
//             //     res.setHeader('Content-Type', 'text/plain');
//             //     res.end('Error reading the HTML file.\n');
//             // }
//             // plus propre avec gestion des erreurs direct
//             if (err) {
//                 res.statusCode = 500;
//                 res.setHeader('Content-Type', 'text/plain');
//                 res.end('Error reading the HTML file.\n');
//                 return;
//             }
//             // Definition des entete de réponse
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');
//             res.end(data);

//         });
//     } 

//     // Message d'erreur de route (404)
//     else {
//         // res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Document not found!\n');
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}/`);
// });


const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 3000;

function printPage(file , res) {


    const filePath = path.join(__dirname, file);

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


const server = http.createServer((req, res) => {

    if (req.url === '/') printPage('index.html', res);
    else if (req.url === '/about') printPage('about.html', res);
    
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