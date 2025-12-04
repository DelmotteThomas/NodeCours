const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'files', 'hello.indd');


if(fs.existsSync(filePath)) {
    console.log('Le fichier existe.');
}
else {
    console.log('Le fichier n\'existe pas.');
}