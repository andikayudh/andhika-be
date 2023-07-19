const router = require('express').Router();

router.get('/v1', (req, res) => { res.send({ message: 'test api' }) });

module.exports = router;