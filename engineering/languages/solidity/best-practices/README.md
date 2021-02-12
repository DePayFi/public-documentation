## Reduce Solidity execution stack: aka. Stack Too Deep

```
InternalCompilerError: Stack too deep, try removing local variables.
```

https://soliditydeveloper.com/stacktoodeep

## Debugging

Render an address as error to debug address at point in time of the smart contract execution:

```
function addressToString(address _address) public pure returns(string memory) {
  bytes32 _bytes = bytes32(uint256(_address));
  bytes memory HEX = "0123456789abcdef";
  bytes memory _string = new bytes(42);
  _string[0] = '0';
  _string[1] = 'x';
  for(uint i = 0; i < 20; i++) {
      _string[2+i*2] = HEX[uint8(_bytes[i + 12] >> 4)];
      _string[3+i*2] = HEX[uint8(_bytes[i + 12] & 0x0f)];
  }
  return string(_string);
}
```

## Static Code Analysis

https://github.com/ConsenSys/mythril

```
docker pull mythril/myth:0.22.14
docker run -v $(pwd):/tmp mythril/myth:0.22.14 analyze /tmp/flatten/DePayPaymentsV1.sol
```
