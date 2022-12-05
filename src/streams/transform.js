import { Transform } from "node:stream";
import { stdout } from "process";

const transform = async () => {
  const dataTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.reverse() + "\n\n");
    },
  });
  process.stdin.pipe(dataTransform).pipe(stdout);
};

await transform();
