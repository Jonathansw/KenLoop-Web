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
  console.log('Connection Sucessful');
});

app.get('/', (req, res) => {
  res.send(
    [{
      name: 'Guitar',
      description: 'wood, 7 string',
    }]
  );
});

app.listen(process.env.PORT || 8081);
