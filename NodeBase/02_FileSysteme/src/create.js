const fs = require('fs');
const path = require('path');

// Création d'un fichier
// création d'un chemin vers le fichier

const filePath = path.join(__dirname, '..', 'files', 'new-demo.txt');

try { 
    // 3 paramètres : chemin, contenu, encodage
    fs.writeFileSync(filePath, 'Bonjour le monde !', 'utf-8');
    console.log('Fichier créé avec succès.');
} catch (error) {
    console.error('Erreur création :', error.path);
}

