const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');

const app = express();

var allowedOrigins = ['http://localhost:4200',
                      'http://localhost:3200'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
app.use('/api/', routes);


app.listen(process.env.PORT || 3001, () => {
  console.log('Application Started');
});