var Web3 = require('web3');
var fs = require('fs');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var acc = web3.eth.accounts;
var code = fs.readFileSync('C:/Users/varly/OneDrive/Desktop/HEALTHCARE/blockchain-for-healthcare/contracts/Healthcare.sol').toString();
var solc = require('solc');
var compiledCode = solc.compile(code);

var abiDefinition = JSON.parse(compiledCode.contracts[':Healthcare'].interface);
var AgentContract = web3.eth.contract(abiDefinition);
var byteCode = compiledCode.contracts[':Healthcare'].bytecode;
var deployedContract = AgentContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
var contractInstance = AgentContract.at(deployedContract.address);
console.log(compiledCode.contracts[':Healthcare'].interface);
deployedContract.address;