// Copy and paste your work, or start typing.
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");
const Teacher = require("../../models/Teacher");
const Student = require("../../models/Student");
router.get('/', (req, res) => {
  User.find(req.query)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})

router.get('/:id', (req, res)=> {
  User.findById(req.params.id)
  .then(dbModel => res.json(dbModel)) 
  .catch(err => res.status(422).json(err));
})

const Class = require("../../models/Classes");
// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
    // Form validation
  // const { errors, isValid } = validateRegisterInput(req.body);
  // // Check validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  Student.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newStudent = new Student({
          type: req.body.type,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if (err) throw err;
            newStudent.password = hash;
            newStudent
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });
 

  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
    
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { email, password } = req.body;

  // Find teacher by email
    Student.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      
      // we know we found a teacher with given email
      // now move on to compare password
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
      // [To Do True will need to go back to isMatched]
        
        // later you'd want this to be: if(isMatch) {
        if (isMatch)  {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearerx " + token
              });
            }
          );
        } else {
          return res
            .status(401)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports = router;