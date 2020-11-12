const { email } = require('./controllers/emailController');

require('dotenv').config();
const express = require('express'),
      emailCtrl = require('./controllers/emailController'),
      app = express();

app.use(express.json());

//email endpoint
app.post('/api/email', emailCtrl.email);

app.listen(5555, () => console.log('Server running on 5555'));