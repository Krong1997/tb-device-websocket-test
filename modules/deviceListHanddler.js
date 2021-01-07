const { deviceList } = require('../constant/env');

if (!Array.isArray(deviceList)) throw new Error('device list must be array');
const deviceOpt = {
  entityType: "DEVICE",
  entityId: '',
  scope: "LATEST_TELEMETRY",
  cmdId: 10
}
const maxDeviceCount = 200;
function deviceArrSpliter() {
  const tmp = [];
  while (deviceList.length > 0) {
    const splitArr = [];
    const t = deviceList.splice(0, maxDeviceCount);
    console.log(t.length, deviceList.length);

    for (let i = 0; i < t.length; i++) {
      splitArr.push({
        ...deviceOpt,
        entityId: t[i].id
      });
    }
    tmp.push(splitArr);
  }
  console.log(tmp.length);
  return tmp;
}

module.exports = deviceArrSpliter;