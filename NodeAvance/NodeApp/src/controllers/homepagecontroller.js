module.exports.index = (req, res) => {
    const users = ['Nicolas', 'Pierre', 'Paul', 'Jacques'];

    res.render('pages/homepage/index', {  
        title: `Accueil`, 
        message: `Bienvenue sur la page d'accueil !`,
        users: users
    });
};