const express = require('express');
const app = express();
// const connectDB = require('./db');
// const path = require('path');
// connectDB();

//-------------MIDDLEWARE----------
app.use(express.urlencoded());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
//-------------MIDDLEWARE----------

app.get('/api/test', (req, res) => res.send('This is the server!'));

// Server static assets if in production

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
