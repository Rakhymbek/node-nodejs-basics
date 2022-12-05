import { access, constants, readdir } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filesDir = join(__dirname, "./files");
const failedErr = "FS operation failed";

const list = async () => {
  access(__filesDir, constants.F_OK, (err) => {
    if (err) throw Error(failedErr);
  });

  readdir(__filesDir, (err, files) => {
    if (err) throw Error(failedErr);
    console.log("FILES", files);
  });
};

await list();
