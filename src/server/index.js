const express = require('express');
const os = require('os');
const pg = require('pg');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const request = require('superagent');
const configjs = require('../../config.js');

const app = express();

const conString = 'postgres://xinuiqdv:jV94r4eOpwuSMTNi2HpPvX_sISQUyKx5@pellefant.db.elephantsql.com:5432/xinuiqdv';
const client = new pg.Client(conString);

client.connect((err) => {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', (err, result) => {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'));

// app.get("/", (req, res) => {
//   console.log('here!');
// });

app.get('/api/getUser name', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/user/loggedin', (req, res) => {
  const { query } = req;

  const { code } = query;

  if (!code) {
    console.log('inside if statement');
    res.send({
      success: false,
      message: 'Error: no code parameter in query',
    });
  }
  console.log('query', query);
  console.log('code', code);

  request
    .post('https://github.com/login/oauth/access_token')
    .send({
      client_id: '5f60818f890a97fad992',
      client_secret: 'ccff16a781b6c05a007dd3da916a6abfc6c96d66',
      code,
    })
    .set('Accept', 'application/json')
    .then(result => {
      accessToken = result.body.access_token;
      console.log('response after the post request', result.body);
      // console.log('access token >>>', accessToken);
    });

  res.end('response ended');
});

app.get('/user/', (req, res, next) => {
  request.get('https://api.github.com/user/memberships/orgs')
    .set('Authorization', `token ${'180dced29800197267cb04340f57264e212b4e88'}`)
    .then(result => {
      console.log('/user/ route >>>', result.body);
    });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
