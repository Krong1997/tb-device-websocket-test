const telemetryCmd = (entityArr) => {
  if(!Array.isArray(entityArr)) throw new Error('entityArr is not array');
  return {
    tsSubCmds: entityArr,
    historyCmds: [],
    attrSubCmds: []
  }
}

module.exports = {
  telemetryCmd
}