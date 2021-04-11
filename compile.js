const path =  require('path'); 
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');


module.exports = solc.compile(source, 1).contracts[':Inbox'];//path to contract and no of contracts we want to compile