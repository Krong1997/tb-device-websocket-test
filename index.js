const WebSocket = require('ws')
const {
  deviceList,
  JWTtoken,
  host,
  port,
  onlyTotal
} = require('./constant/env');
const {
  telemetryCmd
} = require('./constant/tb-telemetry-cmd');
const timeArr = [];

if (!Array.isArray(deviceList)) throw new Error('device list must be array');
if (!JWTtoken) console.log("Invalid JWT token!");

function closeConnection(webSocket, message) {
  console.log(message);
  webSocket.close();
}

deviceList.forEach((device, idx) => {
  const webSocket = new WebSocket(`ws://${host}:${port}/api/ws/plugins/telemetry?token=${JWTtoken}`);
  const entityId = device.id;
  timeArr[idx] = 0;

  if (!entityId) {
    console.log("Invalid device id!");
    webSocket.close();
  }

  webSocket.onopen = function () {
    const data = JSON.stringify(telemetryCmd(entityId));
    webSocket.send(data);
    console.log("Message is sent: " + data);
  };

  webSocket.onmessage = function (event) {
    const received_msg = JSON.parse(event.data);
    if (received_msg.errorCode > 0) return closeConnection(webSocket, `${device.name}: ${received_msg.errorMsg}`);
    timeArr[idx] += 1;
    if (onlyTotal) {
      console.log("total", device.name, timeArr.reduce((accu, curr) => accu + curr));
    } else {
      console.log(device.name, "message is received: ", received_msg.data, timeArr[idx]);
    }
  };

  webSocket.onclose = function () {
    console.log(device.name, "Connection is closed!");
  };

  webSocket.onerror = function (event) {
    console.log(device.name, "Connection is error!", event);
    webSocket.close();
  }
});