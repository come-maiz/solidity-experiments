pragma solidity ^0.4.21;

contract BaseContractWithModifier {

  modifier sampleModifier(address sampleAddress) {
    require(sampleAddress != address(0));
    _;
  }
}
