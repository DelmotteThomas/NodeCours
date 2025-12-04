// Appel d'un module natif 'http' de Node.js
const http = require('http');

// Création d'un serveur HTTP simple
const server = http.createServer((req, res) => {

    // Gestion de l'entête de la réponse et envoi d'un message
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    // Envoi du corps de la réponse
    res.end('Hello, World!\n');

});


// Définition du port d'écoute et démarrage du serveur
const PORT = 3000;


// Démarrage du serveur et affichage d'un message dans la console
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});