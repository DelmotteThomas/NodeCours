const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'files', 'new-demo.txt');


try {
    fs.writeFileSync(filePath, '');
    console.log('Fichier clean.');

    
} catch (error) {
    console.error('Erreur mise à jour :', error.path);
}