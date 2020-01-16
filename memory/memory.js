// Random Access Memory
// TODO - 

// 16 bits -> 2^16
const MEMORY_SIZE = 65536;

class Memory {
  constructor() {
    // 128 kb.
    this._memory = new Uint16Array(MEMORY_SIZE);
  }

  read(position) {
    return this._memory[position];
  }

  write(position, data) {
    this._memory[position] = data;
  }
}

module.exports = Memory;