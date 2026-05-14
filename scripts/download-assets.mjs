import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, basename } from 'path';

const ASSETS = [
  // Logo
  { url: 'https://travco.com/logo-white.png', path: 'public/images/logo-white.png' },
  // Hero slider backgrounds
  { url: 'https://cp.travco.com/images/uploads/_8989_slider1.jpg', path: 'public/images/slides/slider1.jpg' },
  { url: 'https://cp.travco.com/images/uploads/_12294_slider2.jpg', path: 'public/images/slides/slider2.jpg' },
  { url: 'https://cp.travco.com/images/uploads/_1402__8989_slider3.jpg', path: 'public/images/slides/slider3.jpg' },
  { url: 'https://cp.travco.com/images/uploads/_5135__8989_slider5.jpg', path: 'public/images/slides/slider5.jpg' },
  { url: 'https://cp.travco.com/images/uploads/_19901__8989_slider4.jpg', path: 'public/images/slides/slider4.jpg' },
  { url: 'https://cp.travco.com/images/uploads/travco-travel-5111df41-9446-479b-b6b7-e9ef6c6ef869.webp', path: 'public/images/slides/slider6-privatejet.webp' },
  { url: 'https://cp.travco.com/images/uploads/travco-travel-0a9913d3-06f8-439b-8fb2-d68bfc664b0d.webp', path: 'public/images/slides/slider7-esim.webp' },
  // Destination cards
  { url: 'https://cp.travco.com/images/uploads/travco-travel_7671_Untitled-1.jpg', path: 'public/images/destinations/aswan.jpg' },
  { url: 'https://cp.travco.com/images/uploads/travco-travel_8495_Untitled-1.jpg', path: 'public/images/destinations/hurghada.jpg' },
  { url: 'https://cp.travco.com/images/uploads/travco-travel_17821_Untitled-1.jpg', path: 'public/images/destinations/sharm-el-sheikh.jpg' },
  { url: 'https://cp.travco.com/images/uploads/travco-travel_1994_Untitled-1.jpg', path: 'public/images/destinations/cairo.jpg' },
  { url: 'https://cp.travco.com/images/uploads/travco-travel_3411_Untitled-1.jpg', path: 'public/images/destinations/luxor.jpg' },
  { url: 'https://cp.travco.com/images/uploads/_14899_travco-travel_14060_Untitled-1.jpg', path: 'public/images/destinations/marsa-alam.jpg' },
  // Excursion cards
  { url: 'https://cp.travco.com/images/uploads/photo-Snorkeling.jpg', path: 'public/images/excursions/snorkeling.jpg' },
  { url: 'https://cp.travco.com/images/uploads/photo-Unique-Experiences.jpg', path: 'public/images/excursions/luxury-experiences.jpg' },
  { url: 'https://cp.travco.com/images/uploads/photo-Cruises-&-Sailing.jpg', path: 'public/images/excursions/cruises-sailing.jpg' },
  { url: 'https://cp.travco.com/images/uploads/photoSafaris.jpg', path: 'public/images/excursions/safaris.jpg' },
  { url: 'https://cp.travco.com/images/uploads/photo-airportservices.jpg', path: 'public/images/excursions/airport-services.jpg' },
  { url: 'https://cp.travco.com/images/uploads/History.jpg', path: 'public/images/excursions/cultural-historical.jpg' },
  { url: 'https://cp.travco.com/images/uploads/Adventure.jpg', path: 'public/images/excursions/adventure-desert.jpg' },
  { url: 'https://cp.travco.com/images/uploads/photo-citytours.jpg', path: 'public/images/excursions/city-breaks.jpg' },
  { url: 'https://cp.travco.com/images/uploads/photo-nighttours.jpg', path: 'public/images/excursions/night-tours.jpg' },
  { url: 'https://cp.travco.com/images/uploads/photo-Transfers.jpg', path: 'public/images/excursions/transfers.jpg' },
  // Partner logos
  { url: 'https://cp.travco.com/images/uploads/logo-iata.png', path: 'public/images/partners/iata.png' },
  { url: 'https://cp.travco.com/images/uploads/logo-italianchamber.png', path: 'public/images/partners/italian-chamber.png' },
  { url: 'https://cp.travco.com/images/uploads/_14517_logo-iata.jpg', path: 'public/images/partners/ustoa.jpg' },
  { url: 'https://cp.travco.com/images/uploads/_12618_logo-iata2.jpg', path: 'public/images/partners/jata.jpg' },
  { url: 'https://cp.travco.com/images/uploads/_1905_logo-iata1.jpg', path: 'public/images/partners/nta.jpg' },
  { url: 'https://cp.travco.com/images/uploads/logo-ahk.png', path: 'public/images/partners/ahk.png' },
  { url: 'https://cp.travco.com/images/uploads/logo-amc.png', path: 'public/images/partners/amc.png' },
  { url: 'https://cp.travco.com/images/uploads/logo-drv.png', path: 'public/images/partners/drv.png' },
  // UI elements
  { url: 'https://travco.com/images/uploads/proches.png', path: 'public/images/ui/brochures-icon.png' },
  { url: 'https://travco.com/images/uploads/contact.gif', path: 'public/images/ui/contact-icon.gif' },
  { url: 'https://travco.com/images/icons/private-jet.png', path: 'public/images/icons/private-jet.png' },
  { url: 'https://travco.com/images/icons/e-sim.png', path: 'public/images/icons/e-sim.png' },
  // Country flags
  { url: 'https://travco.com/images/uploads/flag-egypt.jpg', path: 'public/images/flags/egypt.jpg' },
  { url: 'https://travco.com/images/uploads/flag-uae.jpg', path: 'public/images/flags/uae.jpg' },
  { url: 'https://travco.com/images/uploads/flag-jordan.jpg', path: 'public/images/flags/jordan.jpg' },
  { url: 'https://travco.com/images/uploads/flag-oman.jpg', path: 'public/images/flags/oman.jpg' },
  { url: 'https://travco.com/images/uploads/flag-morocco.jpg', path: 'public/images/flags/morocco.jpg' },
  { url: 'https://travco.com/images/uploads/qatar.png', path: 'public/images/flags/qatar.png' },
  // Newsletter decoration
  { url: 'https://cp.travco.com/images/uploads/travco-travel-650f6fa2-9a60-4ef7-8813-19e610b4c4b0.webp', path: 'public/images/ui/newsletter-decoration.webp' },
  // Favicon
  { url: 'https://travco.com/favicon.ico', path: 'public/seo/favicon.ico' },
];

const CONCURRENCY = 4;

async function downloadFile(url, path) {
  try {
    const dir = dirname(path);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path, buf);
    console.log(`OK  ${path} (${(buf.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`ERR ${path}: ${e.message}`);
  }
}

async function downloadBatch(assets) {
  for (let i = 0; i < assets.length; i += CONCURRENCY) {
    const batch = assets.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(a => downloadFile(a.url, a.path)));
  }
}

console.log(`Downloading ${ASSETS.length} assets...`);
await downloadBatch(ASSETS);
console.log('Done!');
