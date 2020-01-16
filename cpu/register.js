const TOTAL_REGISTERS = 10;

const registerNames = {
  R_R0: 0,   /* General purpose registers */
  R_R1: 1,
  R_R2: 2,
  R_R3: 3,
  R_R4: 4,
  R_R5: 5,
  R_R6: 6,
  R_R7: 7,
  R_PC: 8,   /* Program counter */
  R_COND: 9  /* Flag which provides information about the previous calculations. */
}

module.exports = {
  TOTAL_REGISTERS,
  registerNames
}
