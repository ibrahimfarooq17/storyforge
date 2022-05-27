const express = require('express');
const app = express();
const mysql = require('mysql');
const { Ipware } = require('@fullerstack/nax-ipware');
const ipware = new Ipware();

const db = mysql.createConnection({
  user: 'draftthecat',
  database: 'storyforge_contacts',
  host: 'storyforge-email-collector.cijfrjgpbmpf.us-east-1.rds.amazonaws.com',
  password: 'NarwhalsRCute!',
  multipleStatements: true,
});

db.connect(function (err) {
  if (err) throw err;
  console.log('MYSQL Connected!');
});

//-------------MIDDLEWARE----------
app.use((req, res, next) => {
  req.ipInfo = ipware.getClientIP(req);
  next();
});
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

app.post('/api/add-email', (req, res) => {
  db.query(
    `INSERT INTO contacts(email,source_ip) VALUES (?,?);`,
    [req.body.email, req.ipInfo.ip],
    (err, result) => {
      if (err) {
        throw err;
      } else res.sendStatus(200);
    }
  );
});

// Server static assets if in production

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
