const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const START = Number(process.env.START);
const END = Number(process.env.END);

const BASE_DIR = process.env.PROJECT_PATH;
const OUTPUT_DIR = process.env.OUTPUT_PATH;

let success = [];
let failed = [];

function run(cmd, cwd) {
  execSync(cmd, {
    cwd,
    stdio: "inherit",
  });
}

for (let i = START; i <= END; i++) {
  const project = `q${i}`;

  const projectPath = path.join(BASE_DIR, project);
  const output = path.join(OUTPUT_DIR, `${project}.mp4`);

  console.log("\n======================================");
  console.log(`Rendering ${project}`);
  console.log("======================================");

  if (!fs.existsSync(projectPath)) {
    console.log(`❌ ${projectPath} not found`);
    failed.push(project);
    continue;
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  try {
    run(
      `npx hyperframes render \
        --quality high \
        --fps 60 \
        --resolution 4k \
        --output "../../${output}"`,
      projectPath
    );

    console.log(`✅ Finished ${project}`);
    success.push(project);
  } catch (err) {
    console.log(`❌ Failed ${project}`);
    failed.push(project);
  }
}

console.log("\n===============================");
console.log("Render Summary");
console.log("===============================");
console.log(`Success : ${success.length}`);
console.log(success.join(", "));
console.log("");
console.log(`Failed  : ${failed.length}`);
console.log(failed.join(", "));