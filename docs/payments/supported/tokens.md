---
sidebar_position: 3
sidebar_label: Tokens
---

# Supported Tokens

Learn which tokens are supported by DePay and what requirements custom tokens need to fulfill.

## List

DePay's permissionless, decentralized payment routing protocol supports all tokens fulfilling the requirements (see [requirements](#requirements)).

Please check [DePay's Website > About > Tokens](https://depay.com/tokens) in order to check which tokens are currently supported exactly.

## Requirements

In order for a token to be supported by DePay, that token needs to be a standard token (e.g. ERC20). Any additions to the token logic (e.g. transfer fees etc.) are not supported. The token also needs to have a pair (liquidity pool) on a supported decentralized exchange (see [supported exchanges](/docs/payments/supported/exchanges)) with **at least USD 10k** reserves in order to be convertible with DePay:

- [Ethereum: Create Uniswap v2 Liquidity Pool](https://app.uniswap.org/#/add/v2/ETH)

- [BNB Smart Chain: Create Pancakeswap Liquidity Pool](https://pancakeswap.finance/add)

- [Polygon: Create Quickswap Liquidity Pool](https://quickswap.exchange/#/add/ETH)

- [Solana: Create Orca Liquidity Pool](https://v1.orca.so/liquidity/create)
