import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "build", "client");

const nested404 = join(clientDir, "404.html", "index.html");
const target404 = join(clientDir, "404.html");
if (existsSync(nested404)) {
  const html = readFileSync(nested404);
  rmSync(join(clientDir, "404.html"), { recursive: true, force: true });
  writeFileSync(target404, html);
}

const spaFallback = join(clientDir, "__spa-fallback.html");
if (existsSync(spaFallback)) {
  rmSync(spaFallback, { force: true });
}
