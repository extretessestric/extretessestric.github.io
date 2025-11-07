const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

// 1️⃣ Remove cached gh-pages clone (optional but safe)
const cachePath = path.join("node_modules", "gh-pages", ".cache");
if (fs.existsSync(cachePath)) {
  fs.rmSync(cachePath, { recursive: true, force: true });
  console.log("✔ Cleared gh-pages cache");
}

// 2️⃣ Delete local gh-pages branch only (not remote!)
try {
  run("git branch -D gh-pages");
  console.log("✔ Removed local gh-pages branch");
} catch {}

// 3️⃣ Build project
run("npm run build");

// 4️⃣ Deploy /dist to existing gh-pages branch (force update, no delete)
run("npx gh-pages -d dist --branch gh-pages --force");

console.log("\n🚀 Deployment complete!");
console.log("👉 Live site: https://extretessestric.github.io/\n");
