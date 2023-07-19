const express = require('express');
const path = require('path');
const app = express();
const port = 8090;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/', require('./src/routes/views'));
app.use('/api', require('./src/routes/apis'));

app.listen(port, () => {
    console.log('--- listen ---', port);
});

