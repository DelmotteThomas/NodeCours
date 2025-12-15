// importer les router d'express

const express = require('express');
const router = express.Router();

// Importer les controleurs

const homepageController = require ('../src/controllers/homepagecontroller');


// Route pour la page d'accueil

router.get('/', homepageController.index);

// Exporter le routeur


router.use((req,res) => {
    res.status(404).render('errors/err_404');
});

module.exports = router ;