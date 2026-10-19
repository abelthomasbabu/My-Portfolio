// Pixel art, one character per pixel. "." is transparent; "x" is the blinking cursor.
// Each sprite is a list of frames; a frame is a list of equal-length rows.

export const palette = {
  k: "#0b0d0c", // outline
  s: "#3a423b", // dark metal
  S: "#59635a", // light metal
  g: "#86efac", // screen green
  a: "#fbbf24", // amber
  x: "#fbbf24", // cursor (blinks)
  w: "#e8ece4", // paper, keys, glints
  d: "#8f998f", // steam, key gaps, hangers
  r: "#f87171", // power LED, button
  p: "#a78bfa", // case fans
  b: "#60a5fa", // controller, deep water
  t: "#38bdf8", // water
  m: "#e5e7eb", // mug
  c: "#b07a4f", // desk top
  C: "#7a5232", // desk front
};

// Copy of `rows` with single pixels replaced: [[x, y, ch], ...].
const paint = (rows, pixels) => {
  const grid = rows.map((row) => [...row]);
  for (const [x, y, ch] of pixels) grid[y][x] = ch;
  return grid.map((row) => row.join(""));
};

const desk = [
  "................................",
  ".kkkkkkkkkkkkkkkk.....kkkkkkkk..",
  ".kssssssssssssssk.....kSSSSSSk..",
  ".kskkkkkkkkkkkksk.....kSrSSaSk..",
  ".kskgggkkkkkkkksk.....kSSSSSSk..",
  ".kskkkggggggkkksk.....ksppppsk..",
  ".kskkkgggkkkkkksk.....kspkkpsk..",
  ".kskkggkkkkkkkksk.....kspkkpsk..",
  ".kskkkgggggkkkksk.....ksppppsk..",
  ".kskgkkkkkkkkkksk.....kSSSSSSk..",
  ".kskkkkkkkkkkkksk.....ksppppsk..",
  ".kssssssssssssssk.....kspkkpsk..",
  ".kkkkkkkkkkkkkkkk.....kspkkpsk..",
  ".......kssk......kmmk.ksppppsk..",
  "......kSSSSk.....kmmkkkSSSSSSk..",
  "..kkkkkkkkkkkkkk.kmmkkkSSSSSSk..",
  "..kwdwdwdwdwdwdk.kkkk.kkkkkkkk..",
  "cccccccccccccccccccccccccccccccc",
  "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
  ".CC..........................CC.",
  ".CC..........................CC.",
];

// The last code line types itself out while steam curls off the mug.
const steamA = [[19, 11, "d"], [18, 12, "d"], [19, 10, "d"]];
const steamB = [[18, 11, "d"], [19, 12, "d"], [18, 10, "d"]];
const deskFrames = [5, 6, 7, 8, 9].map((cursorX, i) =>
  paint(desk, [
    ...Array.from({ length: cursorX - 5 }, (_, n) => [5 + n, 9, "g"]),
    [cursorX, 9, "x"],
    ...(i % 2 ? steamB : steamA),
    ...(i === 3 ? [[24, 3, "S"]] : []), // LED flickers once per loop
  ])
);

const rag = [
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
];

const agent = [
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
];

const hydra = [
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
];

// Tyne Bridge at night: a parabolic arch, hangers, two stone towers and a shimmering river.
const bridge = (() => {
  const W = 64;
  const H = 24;
  const deckY = 13;
  const grid = Array.from({ length: H }, () => Array(W).fill("."));
  const set = (x, y, ch) => {
    if (x >= 0 && x < W && y >= 0 && y < H) grid[y][x] = ch;
  };

  // Sky: a moon and a few stars.
  for (const [x, y] of [[3, 2], [4, 2], [3, 3], [4, 3]]) set(x, y, "a");
  for (const [x, y] of [[14, 1], [25, 4], [40, 1], [53, 3], [60, 6], [9, 7]]) set(x, y, "w");

  // Arch and hangers.
  const left = 12;
  const right = 51;
  const centre = (left + right) / 2;
  const half = (right - left) / 2;
  for (let x = left; x <= right; x++) {
    const y = Math.round(3 + (deckY - 3) * ((x - centre) / half) ** 2);
    set(x, y, "S");
    set(x, y + 1, "s");
    if (x % 3 === 0) for (let h = y + 2; h < deckY; h++) set(x, h, "d");
  }

  // Deck.
  for (let x = 0; x < W; x++) {
    set(x, deckY, "k");
    set(x, deckY + 1, "s");
  }

  // Towers with lit windows, standing on piers in the river.
  for (const tx of [6, 54]) {
    for (let y = 6; y <= deckY + 5; y++) for (let x = tx; x < tx + 4; x++) set(x, y, "S");
    for (let x = tx; x < tx + 4; x++) set(x, 5, "k");
    set(tx + 1, 8, "a");
    set(tx + 2, 10, "a");
  }

  // River.
  for (let y = deckY + 3; y < H; y++) {
    for (let x = 0; x < W; x++) if (grid[y][x] === ".") set(x, y, y > deckY + 6 ? "b" : "t");
  }
  return grid.map((row) => row.join(""));
})();

// Glints on the water, shifted along each frame; none on the tower piers.
const ripples = (offset) => {
  const pixels = [];
  for (let y = 17; y < 24; y += 2) {
    for (let x = (y * 5 + offset) % 9; x < 64; x += 9) {
      const onPier = (x >= 6 && x < 10) || (x >= 54 && x < 58);
      if (!onPier) pixels.push([x, y, "w"]);
    }
  }
  return pixels;
};

export const sprites = {
  desk: deskFrames,
  rag: [rag, paint(rag, [[7, 8, "g"], [11, 0, "a"], [10, 1, "a"]])],
  agent: [agent, paint(agent, [[9, 3, "a"], [10, 4, "a"], [8, 4, "r"], [3, 3, "k"], [3, 5, "k"]])],
  hydra: [hydra, paint(hydra, [[4, 5, "t"], [3, 6, "t"], [5, 6, "w"], [4, 7, "w"], [2, 10, "t"], [9, 10, "t"]])],
  bridge: [0, 3, 6].map((o) => paint(bridge, ripples(o))),
  sun: [[
    "...a....",
    ".a.aa.a.",
    "..aaaa..",
    "aaaaaaaa",
    "aaaaaaaa",
    "..aaaa..",
    ".a.aa.a.",
    "....a...",
  ]],
  moon: [[
    "..ssss..",
    ".sss....",
    "sss.....",
    "sss...a.",
    "sss.....",
    "sss.....",
    ".sss....",
    "..ssss..",
]],
};
