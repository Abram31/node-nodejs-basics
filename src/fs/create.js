import { writeFile, access } from 'fs';
import { join, resolve } from 'path';

const create = async () => {
    const pathFile = resolve(join('src', 'fs', 'files', 'fresh.txt'));
    access(pathFile, (err) => {
        if (!err) return console.error("FS operation failed")
        else {
            writeFile(pathFile, "I am fresh and young", (err) => {
                if (err) throw err;
                console.log('File created');
            })
        }

    })
};

await create();