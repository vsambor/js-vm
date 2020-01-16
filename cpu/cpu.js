// Central Processing Unit
// Purpose: - TODO

const { TOTAL_REGISTERS, registerNames } = require('./register');
const { PC_START } = require('./instructions');


class CPU {
  constructor(memory) {
    this._memory = memory;
    this._registers = new Uint16Array(TOTAL_REGISTERS);
    this._registers[registerNames.R_PC] = PC_START;
    this._running = false;
  }

  start() {
    this._running = true;
  }

  fetch() {
    return this._memory.read(reg[R_PC]++);
  }

  decode() {

  }

  run() {
    while (this._running) {

    }
  }
}

module.exports = {
  CPU
}