const express = require('express')
var bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let list = ['One']

app.use('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', function (req, res) {
  res.send({ list })
})

app.post('/', function (req, res) {
    let newEntry = req.body.newEntry;
    list.push(newEntry);
    res.send({ list })
})

app.listen(3000, console.log('Server running on port 3000'))