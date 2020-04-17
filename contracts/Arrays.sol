pragma solidity ^0.5.16;

contract ContractWithArray {

  uint256[] internal testArray;

  constructor() public {
  }

  function getLength() public view returns(uint256) {
    return testArray.length;
  }

  function pushElement(uint256 value) public {
    testArray.push(value);
  }

  function addElement(uint256 value, uint256 index) public {
    testArray[index] = value;
  }

  function getElement(uint256 index) public view returns(uint256) {
    return testArray[index];
  }

  function removeLastElement() public {
    testArray.length--;
  }

  function increaseLength() public {
    testArray.length++;
  }
}
