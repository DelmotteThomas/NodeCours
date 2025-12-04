const fs = require('fs');
const path = require('path');

// Chemin vers le fichier + non fichier
const filePath = path.join(__dirname, '..', 'files', 'new-demo.txt');


try {
    fs.appendFileSync(filePath, '\n Contenu ajouté.');
    console.log('Contenu ajouté avec succès.');

    
} catch (error) {
    console.error('Erreur mise à jour :', error.path);
}