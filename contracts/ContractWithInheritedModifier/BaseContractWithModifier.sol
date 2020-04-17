pragma solidity ^0.5.16;

contract BaseContractWithModifier {

  modifier sampleModifier(address sampleAddress) {
    require(sampleAddress != address(0));
    _;
  }
}
