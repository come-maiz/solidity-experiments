const ContractWithInheritedModifier = artifacts.require('ContractWithInheritedModifier');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('ContractWithInheritedModifier', function ([owner]) {
  beforeEach(async function () {
    this.contract = await ContractWithInheritedModifier.new();
  });

  it('should reject the address using the modifier from base', async function () {
    await this.contract.functionWithModifierFromBase(0x0)
      .should.be.rejectedWith('revert');
  });

  it('should accept the address using the modifier from base', async function () {
    await this.contract.functionWithModifierFromBase(owner)
      .should.be.fulfilled;
  });
});
