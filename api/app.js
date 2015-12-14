var express = require('express');
var expressJWT = require('express-jwt')
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var cors           = require('cors');
var passport   = require("passport");
var User = require ('./models/user');

//Mongoose Database Structure
mongoose.connect("mongodb://localhost:27017/babybag");

// Setup Passport
require('./config/passport')(passport);


//Setting up middleawre
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(expressJWT({secret: 'dadada34342dadadabbsj'}))
//   .unless({path: ['/authorize', '/join'], method: 'post'}));


//Set up method-override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

//Global user
// app.use(function(req, res, next){
//   global.user = req.user;

//   next();
// });

// THIS SHOULD BE ENABLED FOR SECURITY...

// app.use('/', expressJWT({ secret: process.env.PROJECT_FOUR_SECRET })
//   .unless({
//     path: [
//       { url: '/login', methods: ['POST'] },
//       { url: '/register', methods: ['POST'] },
//       // { url: '/products', methods: ['GET'] },
//       { url: '/users', methods: ['GET'] }
//     ]
//   }));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({message: 'Unauthorized request.'});
  }
  next();
});

//Set up our public folder
app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());


//Setting up routes
var router = require(__dirname + '/config/routes');
app.use("/", router);

app.listen(3000);
console.log("Express is listening on localhost:3000");