import { readFile } from 'fs';
import { join } from 'path';
const read = async () => {
    const pathDir = join('src', 'fs', 'files');
    readFile(join(pathDir, 'fileToRead.txt'), "utf-8", (err, data) => {
        err ? console.error('FS operation failed') :
            console.log(data);
    })
};

await read();