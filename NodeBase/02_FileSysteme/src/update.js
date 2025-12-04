const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'files', 'new-demo.txt');


try {
    fs.writeFileSync(filePath, 'Contenu mis à jour du fichier.');
    console.log('Fichier mis à jour avec succès.');

    
} catch (error) {
    console.error('Erreur mise à jour :', error.path);
}