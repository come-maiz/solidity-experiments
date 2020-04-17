pragma solidity ^0.5.16;

import { BaseContractWithModifier } from "./BaseContractWithModifier.sol";

contract ContractWithInheritedModifier is BaseContractWithModifier {

  function functionWithModifierFromBase(address sampleAddress) public
    sampleModifier(sampleAddress)
  {
  }
}
