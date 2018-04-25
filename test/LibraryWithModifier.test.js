const ContractWithModifierFromLibrary = artifacts.require('ContractWithModifierFromLibrary');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('LibraryWithModifier', function ([owner]) {
  beforeEach(async function () {
    this.contract = await ContractWithModifierFromLibrary.new();
  });

  it('should reject the address using the modifier from library', async function () {
    await this.contract.functionWithModifierFromLibrary(0x0)
      .should.be.rejectedWith('revert');
  });

  it('should accept the address using the modifier from library', async function () {
    await this.contract.functionWithModifierFromLibrary(owner)
      .should.be.fulfilled;
  });
});
