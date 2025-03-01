// razorpay.js
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(__dirname, "../config/config.env"),
});

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY || "rzp_test_1DP5mmOlF5G5aa",
  key_secret: process.env.RAZORPAY_API_SECRET || "XVnQe7KQf6ZUdX0Yb8M9zDkx",
});

module.exports = instance;