
require ('dotenv').config();
const express = require ('express');
const path = require('path');
const app = express ();
const port = process.env.PORT || 8080;
const config = require ('./config/config.js');


// Définir le dossier de template 

app.set('views', path.join(__dirname, config.views));


// Définir le moteur de template EJS -> HTML

app.set('view engine', config.viewEnginne);

// Associer l'extension .html au moteur EJS

app.engine('html', require('ejs').__express);



// Middleware pour les fichiers statiques

app.use(
  '/assets',
  express.static(path.join(__dirname, 'public', 'assets'))
);



// CSS de BootStrap


app.use(
  '/bootstrap',
  express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist'))
);



// JS de bootStrap + Script
app.use(
  '/bootstrap/js',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);

// Dossier Assets pour les script et css personnalisés
app.use('/assets', express.static(path.join(__dirname, 'assets')));


// Routes

// Utilisation des routes définies dans le fichier route.js
// Dans le dossier config
app.use('/', require ('./config/routes'))


// Démarrer le serveur

app.listen(port, ()=>{
    console.log(`Serveur démarré sur http://localhost:${port}`);
});