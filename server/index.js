const express = require('express');
const morgan = require('morgan');
var proxy = require('http-proxy-middleware');

const app = express();
const port = 8888;

app.use(morgan('dev'));
app.use('/api/properties/', proxy({ target: 'http://localhost:8081', changeOrigin: true}))
app.use('/:id', express.static('client'));

app.listen(port);

//forward any requests from proxy to service server 

