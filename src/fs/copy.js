import { opendir, cp } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filesDir = join(__dirname, "./files");
const __copyFilesDir = join(__dirname, "./files_copy");

const copy = async () => {
  opendir(__filesDir, (error, dir) => {
    if (!dir) throw Error("FS operation failed");

    cp(
      __filesDir,
      __copyFilesDir,
      { force: false, recursive: true, errorOnExist: true },
      (err) => {
        if (err) throw Error("FS operation failed");
      }
    );
  });
};

copy();
