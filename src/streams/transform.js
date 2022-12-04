import { Transform } from 'stream';
import { stdin, stdout } from 'process';
import { EOL } from 'os';

const transform = async () => {
    const result = new Transform({transform(chunk, enc, callBack) {
        callBack(null, chunk.toString().replace(EOL,'').split('').reverse().join(''))
    }});
    stdin.pipe(result).pipe(stdout)
  };

await transform();