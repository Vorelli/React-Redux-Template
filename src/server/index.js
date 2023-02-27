require('dotenv').config()
const app = require('./server.js');
const [ip, port] = ['127.0.0.1', 3000];
app.listen(port, ip, (err) => {
  if(err) {
    console.error('Error: ' + err);
  } else {
    console.log('Serving files at http://' + ip + ':' + port + '.');
  }
});