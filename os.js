const os= require('os');

console.log('CPU Architecture:',os.arch());
console.log('Free memory in GB:',os.freemem() / (1024 * 1024 * 1024).toFixed(2));
console.log('Total memory:',os.totalmem() / (1024 * 1024 * 1024).toFixed(2));
console.log('Platform:',os.platform());
console.log('Release:',os.release());
console.log('Type:',os.type());
console.log('Hostname:',os.hostname());