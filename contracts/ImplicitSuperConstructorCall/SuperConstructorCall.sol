pragma solidity ^0.4.23;

contract BaseContractWithoutConstructorArguments {

  bool public baseContractCalled = false;

  constructor() {
    baseContractCalled = true;
  }
}

contract BaseContractWithConstructorArguments {

  bool public baseContractCalled = false;

  constructor(string dummy) {
    baseContractCalled = true;
  }
}

contract ContractWithoutConstructorArguments is BaseContractWithoutConstructorArguments {
}

contract ContractWithConstructorArgumentsBaseWithout is BaseContractWithoutConstructorArguments {

  constructor(string dummy) {
  }
}

contract ContractWithConstructorArgumentsNoOverwriteBaseWith is BaseContractWithConstructorArguments {
}

contract ContractWithConstructorArgumentsOverwriteBaseWith is BaseContractWithConstructorArguments {
  constructor(string dummy) {
  }
}
