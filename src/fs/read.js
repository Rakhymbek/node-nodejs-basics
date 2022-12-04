import { open, close, readFile } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filePath = join(__dirname, "./files/fileToRead.txt");
const failedErr = "FS operation failed";

const read = async () => {
  open(__filePath, "r", (err, fd) => {
    if (err) {
      if (err.code === "ENOENT") {
        throw Error(failedErr);
      }

      throw err;
    }

    try {
      readFile(__filePath, "utf-8", (err, data) => {
        if (err) throw Error(failedErr);
        console.log(data);
      });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
};

await read();
