const telemetryCmd = (entityId) => ({
  tsSubCmds: [
    {
      entityType: "DEVICE",
      entityId: entityId,
      scope: "LATEST_TELEMETRY",
      cmdId: 10
    }
  ],
  historyCmds: [],
  attrSubCmds: []
})

module.exports = {
  telemetryCmd
}