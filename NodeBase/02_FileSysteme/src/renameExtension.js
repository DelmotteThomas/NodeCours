const fs = require('fs');
const path = require('path');


const args = process.argv.slice(2);

if(args.length !== 2) {
    console.error('Usage: node renameExtension.js <filename> <newExtension>');
    process.exit(1);
}
const source = path.join(__dirname, '..', 'files', args[0]);
const destination = path.join(__dirname, '..', 'files',  args[1]);

try {
    fs.renameSync(source, destination);
    console.log('Fichier renommé avec succès.');

    
} catch (error) {
    console.error('Erreur renommage :', error.path);
}