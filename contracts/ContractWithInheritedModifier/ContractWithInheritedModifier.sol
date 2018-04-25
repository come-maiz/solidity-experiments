pragma solidity ^0.4.21;

import { BaseContractWithModifier } from "./BaseContractWithModifier.sol";

contract ContractWithInheritedModifier is BaseContractWithModifier {

  function functionWithModifierFromBase(address sampleAddress) public
    sampleModifier(sampleAddress)
  {
  }
}
