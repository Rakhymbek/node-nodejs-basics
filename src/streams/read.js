import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filePath = join(__dirname, "./files/fileToRead.txt");
const readble = createReadStream(__filePath);

const read = async () => {
  readble.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
