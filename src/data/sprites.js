// Pixel art, one character per pixel. "." is transparent; "x" is the blinking cursor.

export const palette = {
  k: "#0b0d0c", // outline
  s: "#3a423b", // dark metal
  S: "#59635a", // light metal
  g: "#86efac", // screen green
  a: "#fbbf24", // amber
  x: "#fbbf24", // cursor (blinks)
  w: "#e8ece4", // paper, keys
  d: "#8f998f", // steam, key gaps
  r: "#f87171", // power LED, button
  p: "#a78bfa", // case fans
  b: "#60a5fa", // controller
  t: "#38bdf8", // water
  m: "#e5e7eb", // mug
  c: "#b07a4f", // desk top
  C: "#7a5232", // desk front
};

export const sprites = {
  desk: [
    "................................",
    ".kkkkkkkkkkkkkkkk.....kkkkkkkk..",
    ".kssssssssssssssk.....kSSSSSSk..",
    ".kskkkkkkkkkkkksk.....kSrSSaSk..",
    ".kskgggkkkkkkkksk.....kSSSSSSk..",
    ".kskkkggggggkkksk.....ksppppsk..",
    ".kskkkgggkkkkkksk.....kspkkpsk..",
    ".kskkggkkkkkkkksk.....kspkkpsk..",
    ".kskkkgggggkkkksk.....ksppppsk..",
    ".kskgxkkkkkkkkksk.....kSSSSSSk..",
    ".kskkkkkkkkkkkksk.....ksppppsk..",
    ".kssssssssssssssk..d..kspkkpsk..",
    ".kkkkkkkkkkkkkkkk.d...kspkkpsk..",
    ".......kssk......kmmk.ksppppsk..",
    "......kSSSSk.....kmmkkkSSSSSSk..",
    "..kkkkkkkkkkkkkk.kmmkkkSSSSSSk..",
    "..kwdwdwdwdwdwdk.kkkk.kkkkkkkk..",
    "cccccccccccccccccccccccccccccccc",
    "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    ".CC..........................CC.",
    ".CC..........................CC.",
  ],
  rag: [
    "kkkkkkkk....",
    "kwwwwwwkk...",
    "kwkkkkwwwk..",
    "kwwwwwwwwk..",
    "kwkkkkkkwk..",
    "kwwwwwwwwk..",
    "kwkkkkgggk..",
    "kwwwwgwwwg..",
    "kwkkkgwwwg..",
    "kwwwwgwwwg..",
    "kkkkkkgggaa.",
    "..........aa",
  ],
  agent: [
    "............",
    "..kkkkkkkk..",
    ".kbbbbbbbbk.",
    "kbbgbbbbbrbk",
    "kbgggbbbrbrk",
    "kbbgbbbbbrbk",
    "kbbbbkkbbbbk",
    ".kbbk..kbbk.",
    "..kk....kk..",
    "............",
    "............",
    "............",
  ],
  hydra: [
    ".....kk.....",
    "....kttk....",
    "....kttk....",
    "...kttttk...",
    "..kttttttk..",
    ".kttwtttttk.",
    ".ktwttttttk.",
    ".kttttttttk.",
    "..kttttttk..",
    "...kkkkkk...",
    "............",
    "............",
  ],
};
