const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");
const app = express();
const cors = require("cors");



app.use(
   
    (req,res,next) => {
      res.header('Access-Control-Allow-Origin','*');
      res.header('Access-Control-Allow-Headers','*');
  
      // Handle initial OPTIONS request
      if (req.method === "OPTIONS") {
          res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE');
          return res.status(200).json({});
      }
      next();
  });
  


// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
        // db,
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
// Routes
app.use(routes);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// cooment to fix merge 