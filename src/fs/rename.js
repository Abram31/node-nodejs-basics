import fs from 'fs';
import { join } from 'path';

const rename = async () => {
    const pathDir = join('src', 'fs', 'files');
    fs.rename(join(pathDir, 'wrongFilename.txt'), join(pathDir, 'properFilename.md'), (err) => { err && console.error('FS operation failed'); })
};

await rename();