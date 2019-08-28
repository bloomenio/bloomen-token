var Address = artifacts.require("openzeppelin-solidity/contracts/utils/Address.sol");
var SafeMath = artifacts.require("openzeppelin-solidity/contracts/math/SafeMath.sol");

 module.exports = function(deployer) {
    deployer.deploy([SafeMath,Address]);
 };
