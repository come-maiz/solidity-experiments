const BN = require('bn.js');

const ContractWithArray = artifacts.require('ContractWithArray');

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bn')(BN))
  .should();

contract.only('ContractWithArray', function () {
  beforeEach(async function () {
    this.contractWithArray = await ContractWithArray.new();
  });

  it('should get an element from the array', async function() {
    (await this.contractWithArray.getLength()).should.be.bignumber.equal(
      new BN(0));
    await this.contractWithArray.pushElement(0);
    (await this.contractWithArray.getLength()).should.be.bignumber.equal(
      new BN(1));
    (await this.contractWithArray.getElement(0)).should.be.bignumber.equal(
      new BN(0));
  });

  it('should fail when accessing an element when the array is empty', async function () {
    // This test fails with invalid opcode.
    await this.contractWithArray.getElement(0);
  });

  it('should fail when accessing an element out of bounds', async function () {
    await this.contractWithArray.pushElement(0);
    // This test fails with invalid opcode.
    await this.contractWithArray.getElement(1);
  });

  it('should fail when accessing a negative index', async function () {
    await this.contractWithArray.pushElement(0);
    // This test fails with invalid opcode.
    await this.contractWithArray.getElement(-1);
  });

  it('should remove last element', async function () {
    await this.contractWithArray.pushElement(0);
    await this.contractWithArray.removeLastElement();
    (await this.contractWithArray.getLength()).should.be.bignumber.equal(
      new BN(0));
  });

  it('should fail accessing removed element', async function () {
    await this.contractWithArray.pushElement(0);
    await this.contractWithArray.removeLastElement();
    // This test fails with invalid opcode.
    await this.contractWithArray.getElement(0);
  });

  it('should overflow when removing element from empty array', async function () {
    await this.contractWithArray.removeLastElement();
    // This fails because we are not using safe math.
    (await this.contractWithArray.getLength()).should.be.bignumber.equal(
      new BN(0));
  });

  it('should reset elements to 0 after incresing length', async function () {
    await this.contractWithArray.pushElement(10);
    await this.contractWithArray.removeLastElement();
    await this.contractWithArray.increaseLength();
    (await this.contractWithArray.getElement(0)).should.be.bignumber.equal(
      new BN(0));
  });

  it('should fail when trying to add an element to an index out of bounds', async function () {
    await this.contractWithArray.pushElement(1);
    (await this.contractWithArray.getLength()).should.be.bignumber.equal(
      new BN(1));

    await this.contractWithArray.addElement(2, 2);
  });

});
