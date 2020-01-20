var Healthcare = artifacts.require("./Healthcare.sol");

module.exports = function(deployer) {
  deployer.deploy(Healthcare);
};
