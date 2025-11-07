const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function run(cmd) { execSync(cmd, { stdio: "inherit" }); }

// optional: clear cached clone
const cachePath = path.join("node_modules", "gh-pages", ".cache");
if (fs.existsSync(cachePath)) {
  fs.rmSync(cachePath, { recursive: true, force: true });
}

try { run("git branch -D gh-pages"); } catch {} // ignore if missing

run("npm run build");

// IMPORTANT: no --force (gh-pages will overwrite by default)
run("npx gh-pages -d dist -b gh-pages");

console.log("Deployed to gh-pages.");
