import { createHash } from 'node:crypto'
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const content = await readFile(join(__dirname, 'files/fileToCalculateHashFor.txt'));
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(hash);
    } catch (err) {
        throw err
    }
};

calculateHash();