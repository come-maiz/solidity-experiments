pragma solidity ^0.4.21;

import { LibraryWithModifier } from "./LibraryWithModifier.sol";

contract ContractWithModifierFromLibrary {

  function functionWithModifierFromLibrary(address sampleAddress) public
    // This doesn't compile.
    // See: https://github.com/ethereum/solidity/issues/2467
    //LibraryWithModifier.sampleModifier(sampleAddress)
  {
  }
}
