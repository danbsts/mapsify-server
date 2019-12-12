"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const PlaceRepository_1 = require("./repository/PlaceRepository");
const port = process.env.PORT || 3000;
var app = express();
var places = new PlaceRepository_1.PlaceRepository();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/places', function (req, res) {
    res.send(JSON.stringify(places.getPlaces()));
});
app.post('/place', function (req, res) {
    var place = req.body;
    var saved = places.addPlace(place);
    if (saved) {
        res.send({ "success": "O local foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O local nao pode ser cadastrado" });
    }
});
var server = app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
//# sourceMappingURL=MapsifyServer.js.map