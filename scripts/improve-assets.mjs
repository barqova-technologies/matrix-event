import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const R = (p) => resolve(root, p);

// 1) recolor M mark -> flat brand emerald (visible on both themes) for navbar
async function greenMark() {
  const { data, info } = await sharp(R("public/logo-mark.png"))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const px = info.channels;
  for (let i = 0; i < data.length; i += px) {
    if (data[i + 3] > 25) {
      data[i] = 62;
      data[i + 1] = 157;
      data[i + 2] = 120;
    }
  }
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: px },
  })
    .png()
    .toFile(R("public/logo-m-green.png"));
  console.log("wrote logo-m-green.png");
}

// 2) clean transparent monochrome wordmark logos (card surface comes from component)
const clients = [
  { file: "decathlon", name: "DECATHLON", color: "#0082C3" },
  { file: "ficci-flo", name: "FICCI FLO", color: "#C8102E" },
  { file: "ht", name: "Hindustan Times", color: "#222222" },
  { file: "firstview", name: "FirstView", color: "#0D5C63" },
  { file: "asian-paints", name: "Asian Paints", color: "#E4002B" },
  { file: "union-bank", name: "Union Bank", color: "#A5152A" },
  { file: "sbi", name: "SBI", color: "#22409A" },
  { file: "adani", name: "Adani", color: "#005EB8" },
  { file: "dainik-jagran", name: "Dainik Jagran", color: "#D32027" },
  { file: "boho-fest", name: "Boho Fest", color: "#C2603F" },
  { file: "spoken-fest", name: "Spoken Fest", color: "#6D28D9" },
  { file: "oriole", name: "Oriole", color: "#B07A00" },
  { file: "kaamakazi", name: "Kaamakazi", color: "#1A1A1A" },
  { file: "repertwhar", name: "Repertwhar", color: "#0F766E" },
];

for (const c of clients) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 64">
  <text x="120" y="40" text-anchor="middle" font-family="Syne, 'Segoe UI', sans-serif" font-size="26" font-weight="800" letter-spacing="0.5" fill="${c.color}">${c.name}</text>
</svg>`;
  writeFileSync(R(`public/clients/${c.file}.svg`), svg);
}
console.log("wrote", clients.length, "client wordmarks");

await greenMark();
console.log("done");
