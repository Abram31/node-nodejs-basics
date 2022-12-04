import { createReadStream } from 'fs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const readableStream = createReadStream(join(__dirname, 'files/fileToRead.txt'))
    readableStream.pipe(process.stdout)
};

await read();