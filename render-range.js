const { execSync } = require("child_process");
const fs = require("fs");

const START = parseInt(process.env.START, 10);
const END = parseInt(process.env.END, 10);

const BASE_DIR = "speed time and distance";
const OUTPUT_DIR = "render";

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
  const projectPath = `${BASE_DIR}/${project}`;
  const output = `${OUTPUT_DIR}/${project}.mp4`;

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

    success.push(project);

    console.log(`✅ Finished ${project}`);
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