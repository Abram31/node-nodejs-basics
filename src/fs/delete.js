import { unlink } from 'fs';
import { join } from 'path';

const remove = async () => {
    const pathDir = join('src', 'fs', 'files');
    unlink(join(pathDir, 'fileToRemove.txt'), (err) => { err && console.error('FS operation failed'); }) 
};

await remove();