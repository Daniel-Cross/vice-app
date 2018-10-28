const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const ViceController = require('./controllers/ViceController');

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

const app = express();
mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true });

app.use(bodyParser.json());
app.post('/vices', ViceController.post);
app.get('/vices', ViceController.list);
app.get('/vices/:viceId', ViceController.get);
app.put('/vices/:viceId', ViceController.put);
app.delete('/vices/:viceId', ViceController.delete);


app.listen(3001, () => console.log('Vice API is running'));