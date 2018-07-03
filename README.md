# solidity-experiments

My test-driven experiments to learn solidity.

## Experiments

[What happens when you cast to a contract passing the wrong address?](contracts/WrongCast)

If the contract has the same ABI, or even extra state variables, the cast will work.
If the contract is missing a state variable, it will fail.
If the address is an externally owned account, it will fail.

[When is the parent constructor implicitly called?](contracts/ImplicitSuperConstructorCall)

When the constructor of the parent has no arguments.
If the constructor of the parent has arguments and it is not explicitly called on the child, an error is raised:
The contract code couldn't be stored, please check your gas amount.

[How to use a modifier from another contract?](contracts/ContractWithInheritedModifier)

Inherit from the other contract.

[Is it possible to use a modifier from a library?](contracts/LibraryWithModifier)

No, this is not implemented on solidity.
See https://github.com/ethereum/solidity/issues/2467

### Arrays

[What happens if you access the element after the last one?](test/Arrays.test.js)
It fails with invalid opcode.

[What happens if you increase the length of an array?](test/Arrays.test.js)
It fills the new elements with zero values, even if there were other values in
those positions before.
