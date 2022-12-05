import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filePath = join(__dirname, "./files/fileToWrite.txt");
const writable = createWriteStream(__filePath);

const write = async () => {
  process.stdin.pipe(writable);
};

await write();
