import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const writableStream = createWriteStream(join(__dirname, 'files/fileToWrite.txt'))
    process.stdin.pipe(writableStream)
};

await write();