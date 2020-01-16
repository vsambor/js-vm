// Arithmetic and Logic Unit

const AritmeticUnit = require('./arithmeticUnit');
const LogicUnit = require('./logicUnit');

class ALU {
  constructor() {
    this._arthmetic = new AritmeticUnit();
    this._logic = new LogicUnit();
  }
}

module.exports = ALU;