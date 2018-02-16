const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const dbURI = 'mongodb://localhost:27017/KenLoop';

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(dbURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => {
  console.log('Connection to Database Sucessful');
});

// Models
const Bags = require('../models/bags');
const Guitars = require('../models/guitars');
const Percussions = require('../models/percussions');
const Winds = require('../models/winds');

// Load Modules
require('../routes/bag')(app, Bags);
require('../routes/guitar')(app, Guitars);
require('../routes/percussion')(app, Percussions);
require('../routes/wind')(app, Winds);


app.listen(process.env.PORT || 8081);
