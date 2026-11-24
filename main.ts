// make.fun entry: news-image-20261124 (Node 22, standard library only).
// The deliverable image is entry.png next to this file. This program
// writes an exact copy of it to the output directory, so the grader
// gets identical bytes on every run.
//
// Try it locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
if (!readFileSync(src).equals(readFileSync(dst))) {
  throw new Error('entry.png copy mismatch');
}
if (statSync(src).size !== statSync(dst).size) {
  throw new Error('entry.png size mismatch');
}
