const express = require('express'),
      app = express();

app.use(express.json());

app.listen(5555, () => console.log('Server running on 5555'));