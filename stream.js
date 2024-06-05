const { pipeline } = require('stream');
const { promisify } = require('util');
const fs = require('fs');

const pipelineAsync = promisify(pipeline);

async function copyFile(srcFile, destFile) {
    try {
        await pipelineAsync(
            fs.createReadStream(srcFile),
            fs.createWriteStream(destFile)
        );
        console.log('File contents successfully copied!!');
    } catch (err) {
        console.error("Error occurred while copying data:", err);
    }
}

const srcFile = 'input.txt';
const destFile = 'output.txt';

copyFile(srcFile, destFile);
