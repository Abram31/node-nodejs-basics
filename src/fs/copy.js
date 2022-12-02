import { readdir, mkdir, copyFile } from 'fs';
import { join} from 'path';

const copy = async () => {
    const pathDir = join('src', 'fs', 'files');
    readdir(pathDir, "utf-8", (err, request) => {
        if (err) throw err;
        const files = request;

        mkdir(join(pathDir, 'files_copy'), (err) => {
            if (err) return console.error("FS operation failed");

            files.forEach((item) => {

                copyFile(join(pathDir, item), join(pathDir, 'files_copy', item), (err) => {
                    if (err) console.error(err);
                    console.log(`File ${item} copyed`);
                })

            })
        })
    })
};

copy();

