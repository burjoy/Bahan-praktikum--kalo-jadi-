const { google } = require('googleapis');
const sheets = google.sheets('v4');
const { JWT } = require('google-auth-library');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const postKomenSpreadsheet = require('./controller/postKomenSpreadsheet');
const postToDb = require('./controller/postToDb');
const postUser = require('./controller/postUser');

const port = 3000;

require('dotenv').config()

const email = process.env.CLIENT_EMAIL;
const key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
console.log(email);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.LINK_ATLAS)
  .then((response) => {
    console.log("Berhasil konek ke database");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.use(cors());

app.post('/api/post_matrix', postToDb.postToDb);

app.post('/login', postUser.postUser);

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`);
})