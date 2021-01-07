const WebSocket = require('ws')
const {
  JWTtoken,
  host,
  port
} = require('../constant/env');
const {
  telemetryCmd
} = require('../constant/tb-telemetry-cmd');
const deviceArrSpliter = require('./deviceListHanddler');
const counter = require('./counter');

if (!JWTtoken) console.log("Invalid JWT token!");

const counterArr = [];

function closeConnection(webSocket, message) {
  console.log(message);
  webSocket.close();
}

function wsConnecter() {
  const splitDeviceArray = deviceArrSpliter();
  splitDeviceArray.forEach((deviceArray, idx) => {
    const webSocket = new WebSocket(`ws://${host}:${port}/api/ws/plugins/telemetry?token=${JWTtoken}`);
    counterArr[idx] = 0;

    webSocket.onopen = function () {
      const data = JSON.stringify(telemetryCmd(deviceArray));
      webSocket.send(data);
      console.log("Message is sent: " + data);
    };
    webSocket.onmessage = function (event) {
      const received_msg = JSON.parse(event.data);
      if (received_msg.errorCode > 0) return closeConnection(webSocket, received_msg);
      counterArr[idx] += 1;
      console.log("message is received: ", received_msg.data);
      console.log("total message: %s , total websocket connections: %s", counter(counterArr), splitDeviceArray.length);
    };

    webSocket.onclose = function () {
      console.log("Connection is closed!");
    };

    webSocket.onerror = function (event) {
      console.log("Connection is error!", event);
      webSocket.close();
    }
  });
}

module.exports = wsConnecter;
