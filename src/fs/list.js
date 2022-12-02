import { readdir } from 'fs';
import { join } from 'path';

const list = async () => {
    const pathDir = join('src', 'fs', 'files');
    readdir(pathDir, "utf-8", (err, request) => {
        err ? console.error('FS operation failed') :
            console.log(request);
    })

};

await list();