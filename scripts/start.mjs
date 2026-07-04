import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const serverEntryPath = fileURLToPath(new URL("../.output/server/index.mjs", import.meta.url));

const child = spawn(process.execPath, [serverEntryPath], {
  stdio: "inherit",
  env: process.env,
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
