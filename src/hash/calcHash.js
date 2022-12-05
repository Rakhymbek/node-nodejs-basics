import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "node:path";
const { createHash } = await import("node:crypto");

const hash = createHash("sha256");
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __filePath = join(__dirname, "./files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const fileData = await readFile(__filePath, "utf8");
  console.log(hash.update(fileData).digest('hex'));
};

await calculateHash();
