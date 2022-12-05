import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __sourcePath = join(__dirname, "./files/fileToCompress.txt");
const __destPath = join(__dirname, "./files/archive.gz");
const gzip = createGzip();
const readable = createReadStream(__sourcePath);
const writable = createWriteStream(__destPath);

const compress = async () => {
  pipeline(readable, gzip, writable, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
