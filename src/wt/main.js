import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __workerPath = join(__dirname, "./worker.js");
const cpusNumber = cpus().length;

const performCalculations = async () => {
  const arrayOfResults = [];
  const startCount = 10;
  for (let i = 0; i < cpusNumber; i++) {
    const workerPromise = await new Promise((res, rej) => {
      const worker = new Worker(__workerPath, { workerData: startCount + i });
      worker.on("message", (result) => {
        res({ status: "resolved", data: result });
      });
      worker.on("error", () => {
        rej({ status: "error", data: null });
      });
      worker.on("exit", () => {
        res({ status: "error", data: null });
      });
    });
    arrayOfResults.push(workerPromise);
  }
  console.log(arrayOfResults);
};

await performCalculations();
