pragma solidity ^0.5.16;

contract CastAddress {

  SampleContract castedContract;
  string public sampleVar;

  function cast(address sampleAddress) public {
    castedContract = SampleContract(sampleAddress);
    sampleVar = castedContract.sampleVar();
  }
}

contract SampleContract {
  string public sampleVar;

  constructor(string memory _sampleVar) public {
    sampleVar = _sampleVar;
  }

  function testFunction() public {
  }
}

contract SameABISampleContract {
  string public sampleVar;

  constructor(string memory _sampleVar) public {
    sampleVar = _sampleVar;
  }

  function testFunction() public {
  }
}

contract DifferentABIExtraVarSampleContract {
  string public sampleVar;
  string public otherVar;

  constructor(string memory _sampleVar) public {
    sampleVar = _sampleVar;
  }

  function testFunction() public {
  }
}

contract DifferentABIMissingVarSampleContract {
  constructor(string memory _sampleVar) public {}

  function testFunction() public {
  }
}

contract DifferentImplementationSampleContract {
  constructor(string memory _sampleVar) public {}

  function testFunction() public {
    selfdestruct(address(0x0));
  }
}
