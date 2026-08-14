const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "speed time and distance");
const outDir = path.join(__dirname, "all-renders");

if (!fs.existsSync(outDir))
    fs.mkdirSync(outDir);

const projects = fs.readdirSync(root)
    .filter(d => /^q\d+$/.test(d))
    .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

for (const project of projects) {
    console.log(`Rendering ${project}...`);

    execSync(
        `npx hyperframes render --quality high --fps 60 --resolution 4k --output ../../all-renders/${project}.mp4`,
        {
            cwd: path.join(root, project),
            stdio: "inherit"
        }
    );
}