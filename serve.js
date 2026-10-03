// Mini serveur local (aucune dépendance) : node serve.js  →  http://localhost:8080
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const ROOT = __dirname, PORT = process.env.PORT || 8080;
const T = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.png': 'image/png', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
http.createServer((q, r) => {
  const p = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]).replace(/\/$/, '/index.html'));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { r.writeHead(404); return r.end('Introuvable'); }
  r.writeHead(200, { 'content-type': T[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(r);
}).listen(PORT, () => {
  console.log('Sorare Snatch Calculator : http://localhost:' + PORT);
  Object.values(os.networkInterfaces()).flat().filter(i => i.family === 'IPv4' && !i.internal).forEach(i => console.log('Depuis l\'iPhone (même Wi-Fi) : http://' + i.address + ':' + PORT));
});
