require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      emailCtrl = require('./controllers/emailController'),
      app = express();

app.use(express.json());

//email endpoint
app.post('/api/email', emailCtrl.email);

app.listen(5555, () => console.log('Server running on 5555'));