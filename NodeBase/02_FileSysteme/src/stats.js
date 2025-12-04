const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, '..', 'files');
const file = path.join(__dirname, '..', 'files', 'hello.txt');

// const statsDirectory = fs.statSync(directory);
// console.log('Statistiques du répertoire :', statsDirectory);

// const statsFile = fs.statSync(file);
// console.log('Statistiques du fichier :', statsFile);

console.log('Is directory ?', fs.statSync(directory).isDirectory());
console.log('Is file ?', fs.statSync(directory).isFile());
console.log('Is directory ?', fs.statSync(file).isDirectory());
console.log('Is file ?', fs.statSync(file).isFile());
console.log('Taille du fichier (bytes) :', fs.statSync(file).size);
console.log('Date de création du fichier :', fs.statSync(file).birthtime);
console.log('Date de dernière modification du fichier :', fs.statSync(file).mtime);
console.log('Permissions du fichier :', (fs.statSync(file).mode & 0o777).toString(8));
console.log('Propriétaire du fichier (UID) :', fs.statSync(file).uid);
console.log('Groupe du fichier (GID) :', fs.statSync(file).gid);
console.log('Inode du fichier :', fs.statSync(file).ino);
console.log('Nombre de liens physiques vers le fichier :', fs.statSync(file).nlink);
console.log('Dernier accès au fichier :', fs.statSync(file).atime);
console.log('Dernier changement de statut du fichier :', fs.statSync(file).ctime);
console.log('Blocage du périphérique :', fs.statSync(file).dev);
console.log('Taille des blocs alloués :', fs.statSync(file).blksize);
console.log('Nombre de blocs alloués :', fs.statSync(file).blocks);         