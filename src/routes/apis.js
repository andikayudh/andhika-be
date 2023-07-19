const router = require('express').Router();

router.get('/v1', (req, res) => { res.send({ message: 'test api' }) });
router.get('/v1/list-warga', (req, res) => {
    const { items } = require('../data/warga.json');
    res.send(items)
});
router.get('/v1/list-warga/:nik', (req, res) => {
    const { items } = require('../data/warga.json');
    const item = items.find(m => m.nik === +req.params.nik);
    res.send(item)
});

module.exports = router;