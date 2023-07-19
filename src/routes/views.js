const router = require('express').Router();

router.get('/', (req, res) => { res.render('home') });
router.get('/about', (req, res) => { res.render('about') });
router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Sample Login',
        message: 'Test Isi Pesan'
    })
});

module.exports = router;