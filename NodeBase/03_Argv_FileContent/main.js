// interraction avec le terminal / Readline
const readline = require("readline");
// gestion des fichiers
const fs = require("fs");
// gestion des chemins de fichiers
const path = require("path");
// création de l'interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});
// fonction pour lire le contenu d'un fichier
rl.question("Please enter the file name to read: ", (fileName) => {
  // Verifier si le nom de fichier est vide
  if (!fileName.trim()) {
    console.error("No file name provided. Please provide a valid file name.");
    rl.close();
    return;
  }

  const stream = fs.createWriteStream(fileName, { flags: "w" });
  // Passage en mode "entrée continue"
  rl.on("line", (line) => {
    stream.write(line + "\n");
  });
// Gestion de la fin de l'entrée ctrl +d
  rl.on("close", () => {
    stream.end();
    console.log(`\nFichier "${fileName}" enregistré.`)
  });

  // Close the readline interface
  // rl.close();
});
