pragma solidity ^0.4.23;

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

  constructor(string _sampleVar) public {
    sampleVar = _sampleVar;
  }
}

contract SameABISampleContract {
  string public sampleVar;

  constructor(string _sampleVar) public {
    sampleVar = _sampleVar;
  }
}

contract DifferentABIExtraVarSampleContract {
  string public sampleVar;
  string public otherVar;

  constructor(string _sampleVar) public {
    sampleVar = _sampleVar;
  }
}

contract DifferentABIMissingVarSampleContract {
  constructor(string _sampleVar) public {}
}
