# Solidity

> Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum.

- https://ethereum.org/
- https://soliditylang.org/
- https://docs.openzeppelin.com/

## Ethereum

- https://github.com/ethereumbook/ethereumbook

## Process

1. Write failing test.
2. Implement as much as required to make the test green.
3. Repeat, adapt and complete documentation along with any changes.

## Cheat Sheet

Run single tests in isolation:

```
yarn test -g 'name of the test case'
```

or add an `.only` to the spec you want to run in isolation:

```
it.only('contract can be payed with ETH (required for ETH transfers and swapping)', async () => {
  const {contract, otherWallet} = await loadFixture(fixture)

  await expect(
    await otherWallet.sendTransaction({ to: contract.address, value: 100, gasPrice: 0 })
  ).to.changeEtherBalance(contract, 100)
})
```
