const nr = require('newrelic');
const express = require('express');
//const morgan = require('morgan');
var proxy = require('http-proxy-middleware');

const app = express();
const port = 8888;

//app.use(morgan('dev'));

app.use('/:id', express.static('client'));

//loaderio:
/*app.get('', (req, res) => {
  res.send('');
})
*/
app.use('/api/properties/', proxy({ target: 'http://ec2-52-53-224-119.us-west-1.compute.amazonaws.com', changeOrigin: true}))
app.use('/api/property', proxy({target:'http://ec2-13-52-67-232.us-west-1.compute.amazonaws.com', changeOrigin: true}));
app.use('/api/houses/', proxy({ target: 'http://ec2-13-57-193-116.us-west-1.compute.amazonaws.com', changeOrigin: true}))
app.use('/api/agents/', proxy({ target: 'http://ec2-13-57-193-116.us-west-1.compute.amazonaws.com', changeOrigin: true}))


app.listen(port);
