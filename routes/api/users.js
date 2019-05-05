const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator/check");

const User = require("../../models/User");

/**
 * @route      POST api/users
 * @desc       Test route
 * @access     Public
 */
router.post(
  "/",
  [
    check("userName", "User Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { userName, email } = req.body;
    try {
      // Check if the user exists
      let user = await User.findOne({ userName });
      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "User with that username already exists. Please select a different user name"
            }
          ]
        });
      }
      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      // create user instance
      user = new User({
        userName,
        email,
        avatar
      });

      // save user instance
      await user.save();

      // Return jsonwebtoken

      //  console.log(req.body);
      res.send("User registered successfully...");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Send error");
    }
  }
);

// Export Module
module.exports = router;
