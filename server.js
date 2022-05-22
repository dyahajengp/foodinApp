const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// connect to mangodb atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongodb atlas');
  }).catch((error) => {
    console.log('Something wrong happened', error);
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
