import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const unzip = createUnzip();
    const input = createReadStream(join(__dirname, 'files', 'archive.gz'));
    const output = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'));

    input.pipe(unzip).pipe(output);
};

await decompress();