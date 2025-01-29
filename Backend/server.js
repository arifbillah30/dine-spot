const express = require("express");
const cors = require("cors");
const session = require("express-session");
const crypto = require("crypto");
const app = express();
const port = process.env.PORT || 5000;

// Import routes
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");

// Generate a secure session secret
const secret = crypto.randomBytes(64).toString("hex");

// CORS setup
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from frontend running on port 3000
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow cookies
};

app.use(cors(corsOptions)); // Enable CORS with defined options

// Middleware
app.use(express.json());

// Session middleware setup
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" }, // Secure cookies in production
  })
);

// Routes
app.use(registerRoutes);
app.use(loginRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
