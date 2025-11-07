const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

// 1️⃣ Remove cached gh-pages clone if exists
const cachePath = path.join("node_modules", "gh-pages", ".cache");
if (fs.existsSync(cachePath)) {
  fs.rmSync(cachePath, { recursive: true, force: true });
  console.log("✔ Cleared gh-pages cache");
}

// 2️⃣ Delete local gh-pages branch if exists (safe)
try {
  run("git branch -D gh-pages");
  console.log("✔ Removed local gh-pages branch");
} catch {}

// 3️⃣ Delete remote gh-pages branch if exists (safe)
try {
  run("git push origin --delete gh-pages");
  console.log("✔ Removed remote gh-pages branch");
} catch {}

// 4️⃣ Build Vue project
run("npm run build");

// 5️⃣ Deploy dist folder to gh-pages
run("npx gh-pages -d dist --branch gh-pages");

console.log("\n🚀 Deployment complete!");
console.log("👉 Live site: https://extretessestric.github.io/\n");
