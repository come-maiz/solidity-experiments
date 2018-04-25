pragma solidity ^0.4.21;

library LibraryWithModifier {

  modifier sampleModifier(address sampleAddress) {
    require(sampleAddress != address(0));
    _;
  }
}
