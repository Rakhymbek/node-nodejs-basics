import { fileURLToPath } from "url";
import { dirname, join } from "node:path";
import { fork } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __scriptPath = join(__dirname, "./files/script.js");

const spawnChildProcess = async (args) => {
  fork(__scriptPath, args).on("error", (err) => {
    if (err) throw err;
  });
};

spawnChildProcess(["someArg1", "someArg2", "anotherArg", "hello world!"]);
