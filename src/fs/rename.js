import { access, constants, rename as fileRename } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __wrongFilePath = join(__dirname, "./files/wrongFilename.txt");
const __properFilePath = join(__dirname, "./files/properFilename.md");

const rename = async () => {
  const failedErr = "FS operation failed";
  access(__properFilePath, constants.F_OK, (err) => {
    if (!err) throw Error(failedErr);
  });
  access(__wrongFilePath, constants.F_OK, (err) => {
    if (err) throw Error(failedErr);
  });
  fileRename(__wrongFilePath, __properFilePath, (err) => {
    if (err) throw Error(failedErr);
  });
};

await rename();
