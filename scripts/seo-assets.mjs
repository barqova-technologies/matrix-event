// Generates SEO/brand assets from the Matrix logo:
//   app/icon.png        512x512  (Next file-convention favicon source)
//   app/apple-icon.png  180x180  (iOS home-screen)
//   app/favicon.ico      32x32   (PNG wrapped in an ICO container)
//   public/og.png      1200x630  (Open Graph / Twitter card)
//
// Run: node scripts/seo-assets.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const R = (p) => resolve(root, p);

const MARK = R("public/logo-m-green.png"); // flat emerald M, visible on dark
const DARK_BG = "#0F1714";
const ACCENT = "#3E9D78";

// ---- rounded dark tile + centered mark (icon / apple-icon) ----
async function tile(size, markScale, radius, out) {
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <defs>
         <radialGradient id="g" cx="50%" cy="38%" r="75%">
           <stop offset="0%" stop-color="#1c2b24"/>
           <stop offset="100%" stop-color="${DARK_BG}"/>
         </radialGradient>
       </defs>
       <rect width="${size}" height="${size}" rx="${radius}" fill="url(#g)"/>
       <rect x="1" y="1" width="${size - 2}" height="${size - 2}" rx="${radius - 1}"
             fill="none" stroke="rgba(120,170,145,0.18)" stroke-width="2"/>
     </svg>`
  );
  const markPx = Math.round(size * markScale);
  const mark = await sharp(MARK).resize(markPx, markPx, { fit: "contain" }).toBuffer();
  return sharp(bg)
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toFile(R(out));
}

// ---- favicon.ico: 32x32 PNG embedded in a single-image ICO container ----
async function favicon() {
  const png = await sharp(MARK)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt8(0, 2); // palette colors
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // size of PNG data
  entry.writeUInt32LE(22, 12); // offset (6 header + 16 entry)

  writeFileSync(R("app/favicon.ico"), Buffer.concat([header, entry, png]));
}

// ---- og.png: 1200x630 branded social card ----
async function og() {
  const W = 1200;
  const H = 630;
  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
       <defs>
         <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#12201a"/>
           <stop offset="100%" stop-color="${DARK_BG}"/>
         </linearGradient>
         <radialGradient id="glow" cx="78%" cy="30%" r="55%">
           <stop offset="0%" stop-color="rgba(62,157,120,0.35)"/>
           <stop offset="100%" stop-color="rgba(62,157,120,0)"/>
         </radialGradient>
       </defs>
       <rect width="${W}" height="${H}" fill="url(#bg)"/>
       <rect width="${W}" height="${H}" fill="url(#glow)"/>
       <rect x="0" y="0" width="${W}" height="6" fill="${ACCENT}"/>
       <g font-family="Segoe UI, Arial, sans-serif">
         <text x="90" y="150" fill="${ACCENT}" font-size="26" font-weight="700"
               letter-spacing="6">A UNIT OF INFINITY VENTURES</text>
         <text x="86" y="290" fill="#ffffff" font-size="104" font-weight="800"
               letter-spacing="-2">Matrix Events</text>
         <text x="86" y="392" fill="#ffffff" font-size="104" font-weight="800"
               letter-spacing="-2">&amp; Marketing</text>
         <text x="90" y="470" fill="#9DBBAA" font-size="38" font-weight="500">
               We Make Events Happen.</text>
         <text x="90" y="560" fill="${ACCENT}" font-size="28" font-weight="600"
               letter-spacing="2">www.matrixevent.in</text>
       </g>
     </svg>`
  );
  const mark = await sharp(MARK).resize(300, 300, { fit: "contain" }).toBuffer();
  await sharp(svg)
    .composite([{ input: mark, top: 60, left: 840 }])
    .png()
    .toFile(R("public/og.png"));
}

await tile(512, 0.66, 110, "app/icon.png");
await tile(180, 0.66, 40, "app/apple-icon.png");
await favicon();
await og();
console.log("wrote app/icon.png, app/apple-icon.png, app/favicon.ico, public/og.png");
