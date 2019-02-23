const CastAddress = artifacts.require('CastAddress');
const SampleContract = artifacts.require('SampleContract');
const SameABISampleContract = artifacts.require('SameABISampleContract');
const DifferentABIExtraVarSampleContract = artifacts.require('DifferentABIExtraVarSampleContract');
const DifferentABIMissingVarSampleContract = artifacts.require('DifferentABIMissingVarSampleContract');
const DifferentImplementationSampleContract = artifacts.require('DifferentImplementationSampleContract');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('CastAddress', function ([owner]) {
  beforeEach(async function () {
    this.castAddress = await CastAddress.new();
  });

  it('should cast the correct address', async function () {
    sampleContract = await SampleContract.new('test');
    await this.castAddress.cast(sampleContract.address)
      .should.be.fulfilled;
    (await this.castAddress.sampleVar()).should.be.equal('test');
  });

  it('should revert a cast using an externally owned account address', async function () {
    await this.castAddress.cast(owner)
      .should.be.rejectedWith('revert');
  });

  it('should cast the address of a contract with the same ABI', async function () {
    sameABISampleContract = await SameABISampleContract.new('test');
    await this.castAddress.cast(sameABISampleContract.address)
      .should.be.fulfilled;
    (await this.castAddress.sampleVar()).should.be.equal('test');
  });

  it('should cast the address of a contract with different ABI - extra state var', async function () {
    differentABISampleContract = await DifferentABIExtraVarSampleContract.new('test');
    await this.castAddress.cast(differentABISampleContract.address)
      .should.be.fulfilled;
    (await this.castAddress.sampleVar()).should.be.equal('test');
  });

  it('should revert a cast of a contract with different ABI - missing state var', async function () {
    differentABISampleContract = await DifferentABIMissingVarSampleContract.new('test');
    await this.castAddress.cast(differentABISampleContract.address)
      .should.be.rejectedWith('revert');
  });

  it('should revert a cast of a contract with different implementation', async function () {
    differentImplementationSampleContract = await DifferentImplementationSampleContract.new('test');
    await this.castAddress.cast(differentImplementationSampleContract.address)
      .should.be.rejectedWith('revert');
  });

});
