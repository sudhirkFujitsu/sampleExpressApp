// load all env variables

// call the packages we need
const
  express = require('express')       // call express
  , app = express()               // define our app using express
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , expressJwt = require('express-jwt')
  ;

app.options('*', cors());
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(bodyParser.json({limit: '100mb'}));
app.disable('x-powered-by');

app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '0');
  res.header('Pragma', 'no-cache');
  res.set("Content-Security-Policy", "default-src 'self'");
  res.set('X-Frame-Options', 'DENY')
  next();
});



//Added routes for company
// app.use('', expressJwt({ secret: process.env.JWT_SECRET, algorithms: ['sha1', 'RS256', 'HS256'] })
//   .unless({
//     path: ['/v1/api/auth/login/'
//       , '/v1/api/company'
//       , '/v1/api/client'
//       , '/v1/api/auth/consumer/login/'
//       , '/v1/api/redis'
//     ]
//   }));

//require and run the code from our routes.js file and passes it app
require('./routes.js')(app);


app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
  logger.error(err.stack)
  res.status(500).send('Something broke!')
})

//app.use('/tex-tracer', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/tex-tracer', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { "showExplorer": true }));

// Save our port
var port = 3000;

// Start the server and listen on port 
var server = app.listen(port, function () {
  console.log("Server is live on port: " + port);
});
