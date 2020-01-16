// TODO - 

const CPU = require('./cpu/cpu');
const Memory = require('../memory/memory');
const Bus = require('./bus');

class MotherBoard {
  constructor() {
    this._ram = new Memory();
    this._cpu = new CPU();
    this._bus = new Bus();
  }

  wire() {

  }

  start() {
    this._cpu.start();
  }
}