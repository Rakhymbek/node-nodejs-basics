import { writeFile, open, close } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filePath = join(__dirname, "./files/fresh.txt");

const create = async () => {
  open(__filePath, "wx", (err, fd) => {
    if (err) {
      if (err.code === "EEXIST") {
        throw Error("FS operation failed");
      }
    }
    try {
      writeFile(__filePath, "I am fresh and young", (err) => {
        if (err) throw err;
      });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
};

await create();
