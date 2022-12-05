import { spawn } from 'child_process';
import { stdin, stdout } from 'process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProc = spawn('node', [join(__dirname, 'files', 'script.js'), ...args.split(' ')])
    stdin.on('data', (data) => {
        childProc.stdin.write(data)
    })
    childProc.stdout.on('data', (data)=>{
        console.log(data.toString());
    })
};

spawnChildProcess();