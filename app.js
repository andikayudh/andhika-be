const express = require('express');
const app = express();
const port = 8090;

// app.get('/', (req, res) => { res.send('hello') });
// app.get('/about', (req, res) => { res.send('-- about --') });
// app.get('/login', (req, res) => { res.send('-- login --') });

// app.get('/api/v1', (req, res) => { res.send({ message: 'test api' }) });

app.use('/', require('./src/routes/views'));
app.use('/api', require('./src/routes/apis'));

app.listen(port, () => {
    console.log('--- listen ---', port);
});

