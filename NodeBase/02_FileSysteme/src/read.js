const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'files', 'demo.txt');

try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
} catch (error) {
    console.error('Error reading file:', error.path);
}
