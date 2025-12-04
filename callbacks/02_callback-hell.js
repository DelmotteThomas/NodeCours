const { readFile } = require('fs').promises;

readFile('data.txt', 'utf8')

    .then(() => readFile('data1.txt', 'utf8'))

    .then(data => {
        console.log('File contents:', data);
    })

    .catch(err => {
        console.error('Error reading file:', err);
    });

    