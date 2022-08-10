const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./configs/database')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));