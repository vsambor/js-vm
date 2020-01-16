const operationsCodes = {
  OP_BR: 0,     /* branch */
  OP_ADD: 1,    /* add  */
  OP_LD: 2,     /* load */
  OP_ST: 3,     /* store */
  OP_JSR: 4,    /* jump register */
  OP_AND: 5,    /* bitwise and */
  OP_LDR: 6,    /* load register */
  OP_STR: 7,    /* store register */
  OP_RTI: 8,    /* unused */
  OP_NOT: 9,    /* bitwise not */
  OP_LDI: 10,   /* load indirect */
  OP_STI: 11,   /* store indirect */
  OP_JMP: 12,   /* jump */
  OP_RES: 13,   /* reserved (unused) */
  OP_LEA: 14,   /* load effective address */
  OP_TRAP: 15   /* execute trap */
}

const conditionalFlags = {
  FL_POS = 1 << 0,   /* P */
  FL_ZRO = 1 << 1,   /* Z */
  FL_NEG = 1 << 2,   /* N */
};

const PC_START = 0x3000

module.exports = {
  operationsCodes,
  conditionalFlags,
  PC_START
}
