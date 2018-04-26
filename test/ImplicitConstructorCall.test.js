const BaseContractWithoutConstructorArguments = artifacts.require('BaseContractWithoutConstructorArguments');
const BaseContractWithConstructorArguments = artifacts.require('BaseContractWithConstructorArguments');
const ContractWithoutConstructorArguments = artifacts.require('ContractWithoutConstructorArguments');
const ContractWithConstructorArgumentsBaseWithout = artifacts.require('ContractWithConstructorArgumentsBaseWithout');
const ContractWithConstructorArgumentsNoOverwriteBaseWith = artifacts.require('ContractWithConstructorArgumentsNoOverwriteBaseWith');
const ContractWithConstructorArgumentsOverwriteBaseWith = artifacts.require('ContractWithConstructorArgumentsOverwriteBaseWith');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('ImplicitConstructorCall', function () {

  describe('BaseContractWithoutConstructorArguments', function (){
    it('should call constructor', async function() {
      const contract = await BaseContractWithoutConstructorArguments.new();
      (await contract.baseContractCalled()).should.be.true;
    });
  });

  describe('BaseContractWithConstructorArguments', function (){
    it('should call constructor', async function() {
      const contract = await BaseContractWithConstructorArguments.new('test');
      (await contract.baseContractCalled()).should.be.true;
    });
  });

  describe('ContractWithoutConstructorArguments', function (){
    it('should call parent constructor', async function() {
      const contract = await ContractWithoutConstructorArguments.new();
      (await contract.baseContractCalled()).should.be.true;
    });
  });

  describe('ContractWithConstructorArgumentsBaseWithout', function (){
    it('should call parent constructor', async function() {
      const contract = await ContractWithConstructorArgumentsBaseWithout.new('test');
      (await contract.baseContractCalled()).should.be.true;
    });
  });

  describe('ContractWithConstructorArgumentsNoOverwriteBaseWith', function (){
    it('should call parent constructor', async function() {
      const contract = await ContractWithConstructorArgumentsNoOverwriteBaseWith.new('test');
      (await contract.baseContractCalled()).should.be.true;
    });
  });

  describe('ContractWithConstructorArgumentsOverwriteBaseWith', function (){
    it('should call parent constructor', async function() {
      const contract = await ContractWithConstructorArgumentsOverwriteBaseWith.new('test');
      (await contract.baseContractCalled()).should.be.true;
    });
  });
});
