require('dotenv').config();

module.exports = {
  deviceList: require('./deviceList'),
  JWTtoken: process.env.JWTtoken || "",
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || "80",
}