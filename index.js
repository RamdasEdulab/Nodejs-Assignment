const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose =require('./database/mongoose');

app.use(express.json());
const user = require('./controller/usercontroller');
app.use(bodyParser.json());
app.use('/api/user', user);
app.listen(3000,() => console.log('server started at port 3000'));
