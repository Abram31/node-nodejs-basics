import zlib from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const gzip = zlib.createGzip();
    const input = createReadStream(join(__dirname, 'files','fileToCompress.txt'));
    const output = createWriteStream(join(__dirname, 'files', 'archive.gz'), );
    input.pipe(gzip).pipe(output);
};

await compress();