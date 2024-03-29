import express = require('express');
import bodyParser = require("body-parser");
import {PlaceRepository} from './repository/PlaceRepository'
import { Place } from './common/Place';
const port = process.env.PORT || 3000;

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


var app = express();

var places = new PlaceRepository();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/places', function (req, res) {
    res.send(JSON.stringify(places.getPlaces()))
})

app.get('/clean', function (req, res) {
  res.send(JSON.stringify(places.cleanPlaces()))
})

app.get('/generateDefault', function (req, res) {
  places.createDefaultPlaylistPlaceList();
  res.send(JSON.stringify("Default playlist list created with success."))
})

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})


app.post('/place', function (req: express.Request, res: express.Response) {
    var place: Place = <Place> req.body;
    console.log(req.body);
    var saved = places.addPlace(place);
    if (saved) {
      res.send({"success": "O local foi cadastrado com sucesso"});
    } else {
      res.send({"failure": "O local nao pode ser cadastrado"});
    }
})

var server = app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})
  