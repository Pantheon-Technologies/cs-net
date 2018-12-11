const express = require('express');
const os = require('os');

const app = express();
const Sequelize = require('sequelize');
const pg = require('pg');


app.use(express.static('dist'));


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


// app.get("/", (req, res) => {
//   console.log('here!');
// });


app.listen(8080, () => console.log('Listening on port 8080!'));
