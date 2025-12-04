const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'files', 'new-demo.txt');


try {
    fs.unlinkSync(filePath);
    console.log('Fichier supprimé avec succès.');

    
} catch (error) {
    console.error('Erreur suppression :', error.path);
}