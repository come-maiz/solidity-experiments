pragma solidity ^0.5.16;

contract BaseContractWithoutConstructorArguments {

  bool public baseContractCalled = false;

  constructor() public {
    baseContractCalled = true;
  }
}

contract BaseContractWithConstructorArguments {

  bool public baseContractCalled = false;

  constructor(string memory dummy) public {
    baseContractCalled = true;
  }
}

contract ContractWithoutConstructorArguments is BaseContractWithoutConstructorArguments {
}

contract ContractWithConstructorArgumentsBaseWithout is BaseContractWithoutConstructorArguments {

  constructor(string memory dummy) public {
  }
}

contract ContractWithConstructorArgumentsNoOverwriteBaseWith is BaseContractWithConstructorArguments {
}

contract ContractWithConstructorArgumentsOverwriteBaseWith is BaseContractWithConstructorArguments {
  constructor(string memory dummy) public {
  }
}
