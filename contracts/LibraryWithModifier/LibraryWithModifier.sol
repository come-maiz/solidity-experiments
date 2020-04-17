pragma solidity ^0.5.16;

library LibraryWithModifier {

  modifier sampleModifier(address sampleAddress) {
    require(sampleAddress != address(0));
    _;
  }
}
