const express = require('express');
const os = require('os');
const pg = require('pg');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUser name', (req, res) => res.send({ username: os.userInfo().username }));


app.listen(8080, () => console.log('Listening on port 8080!'));
