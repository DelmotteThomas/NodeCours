const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'files', 'demo.txt');
const destination = path.join(__dirname, '..', 'files', 'new-demo.txt');


try {
    fs.renameSync(source, destination);
    console.log('Fichier renommé avec succès.');

    
} catch (error) {
    console.error('Erreur renommage :', error.path);
}