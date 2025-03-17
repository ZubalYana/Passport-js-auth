const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
require("./passportConfig");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(session({ secret: "your_secret_key", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", 
  passport.authenticate("google", { failureRedirect: "/" }), 
  (req, res) => {
    res.redirect("http://localhost:5173/"); 
  }
);

app.get("/auth/logout", (req, res) => {
  req.logout(() => {
    res.send("Logged out");
  });
});

app.get("/auth/user", (req, res) => {
  res.send(req.user || null);
});

app.listen(5000, () => console.log("Server running on port 5000"));
