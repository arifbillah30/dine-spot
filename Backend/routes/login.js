const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // Using bcrypt (consistent with registration)
const db = require("./dbconnect"); // Ensure the correct path to dbconnect

// Route to handle user login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  // Query to check if email exists
  const query = "SELECT * FROM userdata WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Server error." });
    }

    // Check if user exists
    if (results.length === 0) {
      console.log("User not found in database");
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Compare the entered password with the hashed password in the database
    const user = results[0];
    console.log("Comparing password: ", password);
    console.log("Stored hashed password: ", user.password);

    try {
      // Compare password with hashed password from database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        console.log("Password does not match.");
        return res.status(401).json({ message: "Invalid email or password." });
      }

      // Set up the session with the user's email
      req.session.user = {
        email: user.email, // Store email in session
      };

      // Send success response
      res.status(200).json({
        message: "Login successful.",
        user: {
          email: user.email,
        },
      });
    } catch (err) {
      console.error("Password comparison error:", err);
      res.status(500).json({ message: "Server error during password check." });
    }
  });
});

module.exports = router;
