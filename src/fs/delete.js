import { access, constants, rm } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filePath = join(__dirname, "./files/fileToRemove.txt");
const failedErr = "FS operation failed";

const remove = async () => {
  access(__filePath, constants.F_OK, (err) => {
    if (err) throw Error(failedErr);
  });
  rm(__filePath, (err) => {
    if (err) throw err;
  });
};

await remove();
