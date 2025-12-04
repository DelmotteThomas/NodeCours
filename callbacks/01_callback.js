const fs = require('fs');


// Méthode asynchrone avec callback anonyme
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Une erreur est survenue',err);
    return;
  }
  console.log('Contenu du fichier :',data);
});

// Fct call back est forcement anonyme
// Méthode asynchrone avec callback nommé
// Réutilisable

function handleFileRead(err, data) {
  if (err) {
    console.error('Une erreur est survenue',err);
    return;
  }
  console.log('Contenu du fichier :',data);
}


fs.readFile('data.txt', 'utf8', handleFileRead);

// POur le callback on retirer les () car on ne l'appelle pas directement
// On le passe en argument pour qu'il soit appelé plus tard par readFile
// Si on mettait des () on l'appellerait immédiatement et on passerait son résultat à readFile
// Ce qui n'est pas ce que l'on veut faire ici


