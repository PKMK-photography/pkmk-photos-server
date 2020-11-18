require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      emailCtrl = require('./controllers/emailController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

//email endpoint
app.post('/api/email', emailCtrl.email);

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));