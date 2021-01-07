require('dotenv').config();

module.exports = {
  deviceList: require('../device/deviceList'),
  JWTtoken: process.env.JWTtoken || "",
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || "80",
  onlyTotal: process.env.ONLY_TOTAL || false
}