---
sidebar_position: 1
---

# Functionalities

Learn how DePay's payment protocol functions in detail.

In order to simplify integrations, DePay provides the [web3-payments](https://github.com/DePayFi/web3-payments) JavaScript SDK.

## Pay

The DePay payment protocol primarily facilitates payment transactions. It accepts all essential payment details, executes the payment, and, if necessary, converts tokens. Additionally, it has the capability to deduct a transaction fee before transferring the final amount to the recipient.

#### EVM

The `pay` function can be executed with prior token approvals granted by the payment sender or with a Permit2 `SinglePermit`.

The `pay` function takes a payment tuple as input with the following structure:

```
  {
    amountIn: "1000000000000000000",
    paymentAmount: "900000000000000000",
    feeAmount: "100000000000000000",
    tokenInAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    exchangeAddress: "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
    tokenOutAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    paymentReceiverAddress: "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02",
    feeReceiverAddress: "0x9Db58B260EfAa2d6a94bEb7E219d073dF51cc7Bb",
    exchangeType: 2,
    receiverType: 0,
    exchangeCallData: "0x24856bc30000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000020b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000016aecd87787024340000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000016aecd877870243400000000000000000000000000000000000000000000000000000000000f424000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b0d500b1d8e8ef31e21c99d1db9a6444d3adf12700001f4c2132d05d31c914a87c6611c10748aeb04b58e8f000000000000000000000000000000000000000000",
    receiverCallData: "0x0000000000000000000000000000000000000000",
    deadline: 1792276035,
  }
```

`amountIn`: The amount paid into the router from the msg.sender.

`paymentAmount`: The amount paid to te payment receiver.

`feeAmount`: The amount paid to the fee receiver.

`tokenInAddress`: The address of the token paid into the router from the msg.sender. Use 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE for the native token of the respective blockchain.

`exchangeAddress`: The address of the exchange to use in order to convert the incoming token into the outgoing token. The exchange address needs to be enabled by the protocol governance first.

`tokenOutAddress`: The address of the token paid out to the payment receiver and optionally to the fee receiver.

`paymentReceiverAddress`: The address of the receiver of the payment.

`feeReceiverAddress`: The address of the fee receiver.

`exchangeType`: The type of the exchange.

- `0` just exchange; e.g. WETH/ETH
- `1` pull; The exchange will pull the token into the exchange router; Approval required; e.g. Uniswap V2
- `2` push; The exchange expects the token to be pushed into the exchange router; e.g. Uniswap V3

`receiverType`: The type of the receiver.

- `0` just send; `tokenOut` will be transfered to the receiver address.
- `1` receiver will pull; `tokenOut` approval will allow the receiver contract to pull the tokens out of the payment router; not suitable for the native token of a blockchain (use push instead)
- `2` push to receiver; `tokenOut` will be pushed to the receiver contract as part or prior to calling the given call data of the receiving smart contract.

`exchangeCallData`: The call data applied to the exchange address in order to convert token in to token out.

`receiverCallData`: The call data used to call the receiving smart contract.

`deadline`: unix timestamp after which the payment will be declined by the smart contract.

#### Solana

DePay's Solana program is tailored to offer functions specifically optimized for different payment routes.

```
route_sol( // anchorDescriminator: "6497164560834983274"
  nonce(u64),
  paymentAmount(u64),
  feeAmount(u64),
  deadline(i64)
)

[
  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: fromPaymentsAccount, isSigner: false, isWritable: true },
  { pubkey: paymentReceiver, isSigner: false, isWritable: true },
  { pubkey: feeReceiver, isSigner: false, isWritable: true },
]

```

```
route_token( // anchorDescriminator: "13483873682232752277"
  nonce(u64),
  paymentAmount(u64),
  feeAmount(u64),
  deadline(i64)
) 

[
  { pubkey: TokenProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: fromPaymentsAccount, isSigner: false, isWritable: true },
  { pubkey: fromTokenAccount, isSigner: false, isWritable: true },
  { pubkey: paymentReceiverTokenAccount, isSigner: false, isWritable: true },
  { pubkey: feeReceiverTokenAccount, isSigner: false, isWritable: true },
]

```

```
route_orca_swap(  // anchorDescriminator: "9797248061404332986"
  nonce(u64),
  amountIn(u64),
  sqrtPriceLimit(u128),
  amountSpecifiedIsInput(bool),
  aToB(bool),
  paymentAmount(u64),
  feeAmount(u64),
  deadline(i64)
)

[
  { pubkey: TokenProgram.programId, isSigner: false, isWritable: false },
  { pubkey: AMMProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: fromPaymentsAccount, isSigner: false, isWritable: true },
  { pubkey: senderTokenAccount, isSigner: false, isWritable: true },
  { pubkey: whirlPool, isWritable: true, isSigner: false },
  { pubkey: tokenVaultA, isWritable: true, isSigner: false },
  { pubkey: tokenVaultB, isWritable: true, isSigner: false },
  { pubkey: tickArray0, isWritable: true, isSigner: false },
  { pubkey: tickArray1, isWritable: true, isSigner: false },
  { pubkey: tickArray2, isWritable: true, isSigner: false },
  { pubkey: oracleAccount, isWritable: false, isSigner: false },
  { pubkey: escrowOutTokenAccount, isSigner: false, isWritable: true },
  { pubkey: paymentReceiverAccount, isSigner: false, isWritable: true },
  { pubkey: feeReceiverAccount, isSigner: false, isWritable: true },
]

```

```
route_orca_swap_sol_out(  // anchorDescriminator: "13662217913752830165"
  nonce(u64),
  amountIn(u64),
  sqrtPriceLimit(u128),
  amountSpecifiedIsInput(bool),
  aToB(bool),
  paymentAmount(u64),
  feeAmount(u64),
  deadline(i64)
)

[
  { pubkey: TokenProgram.programId, isSigner: false, isWritable: false },
  { pubkey: AMMProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: fromPaymentsAccount, isSigner: false, isWritable: true },
  { pubkey: senderTokenAccount, isSigner: false, isWritable: true },
  { pubkey: whirlPool, isWritable: true, isSigner: false },
  { pubkey: tokenVaultA, isWritable: true, isSigner: false },
  { pubkey: tokenVaultB, isWritable: true, isSigner: false },
  { pubkey: tickArray0, isWritable: true, isSigner: false },
  { pubkey: tickArray1, isWritable: true, isSigner: false },
  { pubkey: tickArray2, isWritable: true, isSigner: false },
  { pubkey: oracleAccount, isWritable: false, isSigner: false },
  { pubkey: escrowOutTokenAccount, isSigner: false, isWritable: true },
  { pubkey: escrowOutSolAccount, isSigner: false, isWritable: true },
  { pubkey: paymentReceiverAccount, isSigner: false, isWritable: true },
  { pubkey: feeReceiverAccount, isSigner: false, isWritable: true },
]

```

```
route_orca_two_hop_swap(  // anchorDescriminator: "15695720599845325801"
  nonce(u64),
  amountIn(u64),
  amountSpecifiedIsInput(bool),
  aToBOne(bool),
  aToBTwo(bool),
  sqrtPriceLimitOne(u128),
  sqrtPriceLimitTwo(u128),
  paymentAmount(u64),
  feeAmount(u64),
  deadline(i64)
)

[
  { pubkey: TokenProgram.programId, isSigner: false, isWritable: false },
  { pubkey: AMMProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: fromPaymentsAccount, isSigner: false, isWritable: true },
  { pubkey: whirlPoolOne, isWritable: true, isSigner: false },
  { pubkey: whirlPoolTwo, isWritable: true, isSigner: false },
  { pubkey: senderTokenAccount, isSigner: false, isWritable: true },
  { pubkey: tokenVaultOneA, isWritable: true, isSigner: false },
  { pubkey: tokenVaultOneB, isWritable: true, isSigner: false },
  { pubkey: middleTokenAccount, isWritable: true, isSigner: false },
  { pubkey: tokenVaultTwoA, isWritable: true, isSigner: false },
  { pubkey: tokenVaultTwoB, isWritable: true, isSigner: false },
  { pubkey: tickArrayOne0, isWritable: true, isSigner: false },
  { pubkey: tickArrayOne1, isWritable: true, isSigner: false },
  { pubkey: tickArrayOne2, isWritable: true, isSigner: false },
  { pubkey: tickArrayTwo0, isWritable: true, isSigner: false },
  { pubkey: tickArrayTwo1, isWritable: true, isSigner: false },
  { pubkey: tickArrayTwo2, isWritable: true, isSigner: false },
  { pubkey: oracleOne, isWritable: false, isSigner: false },
  { pubkey: oracleTwo, isWritable: false, isSigner: false },
  { pubkey: escrowOutTokenAccount, isSigner: false, isWritable: true },
  { pubkey: paymentReceiverAccount, isSigner: false, isWritable: true },
  { pubkey: feeReceiverAccount, isSigner: false, isWritable: true },
]
```

```
route_orca_two_hop_swap_sol_out(  // anchorDescriminator: "15074061855608091530"
  nonce(u64),
  amountIn(u64),
  amountSpecifiedIsInput(bool),
  aToBOne(bool),
  aToBTwo(bool),
  sqrtPriceLimitOne(u128),
  sqrtPriceLimitTwo(u128),
  paymentAmount(u64),
  feeAmount(u64),
  deadline(i64)
)

[
  { pubkey: TokenProgram.programId, isSigner: false, isWritable: false },
  { pubkey: AMMProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: fromPaymentsAccount, isSigner: false, isWritable: true },
  { pubkey: whirlPoolOne, isWritable: true, isSigner: false },
  { pubkey: whirlPoolTwo, isWritable: true, isSigner: false },
  { pubkey: senderTokenAccount, isSigner: false, isWritable: true },
  { pubkey: tokenVaultOneA, isWritable: true, isSigner: false },
  { pubkey: tokenVaultOneB, isWritable: true, isSigner: false },
  { pubkey: middleTokenAccount, isWritable: true, isSigner: false },
  { pubkey: tokenVaultTwoA, isWritable: true, isSigner: false },
  { pubkey: tokenVaultTwoB, isWritable: true, isSigner: false },
  { pubkey: tickArrayOne0, isWritable: true, isSigner: false },
  { pubkey: tickArrayOne1, isWritable: true, isSigner: false },
  { pubkey: tickArrayOne2, isWritable: true, isSigner: false },
  { pubkey: tickArrayTwo0, isWritable: true, isSigner: false },
  { pubkey: tickArrayTwo1, isWritable: true, isSigner: false },
  { pubkey: tickArrayTwo2, isWritable: true, isSigner: false },
  { pubkey: oracleOne, isWritable: false, isSigner: false },
  { pubkey: oracleTwo, isWritable: false, isSigner: false },
  { pubkey: escrowOutTokenAccount, isSigner: false, isWritable: true },
  { pubkey: escrowOutSolAccount, isSigner: false, isWritable: true },
  { pubkey: paymentReceiverAccount, isSigner: false, isWritable: true },
  { pubkey: feeReceiverAccount, isSigner: false, isWritable: true },
]
```

Prior executing payments, make sure the payment sender has a payments nonce account, otherwise create one using `create_payments_account`.

Seed the payments account with `["payments", fromAccountAsBuffer]`.

```
create_payments_account()  // anchorDescriminator: "8445995362644372894"

[
  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: paymentsAccount, isSigner: false, isWritable: true },
]
```

If a token middle account (orca swaps) should not exist for the given payment sender, make sure to create a standard associated token account for the given payment sender.

If a escrow out token account (orca swaps) should not exist yet, make sure it's create with `create_escrow_token_account` prior executing the payment:

```
create_escrow_token_account()  // anchorDescriminator: "16156440424245087"

[
  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
  { pubkey: TokenProgram.programId, isSigner: false, isWritable: false },
  { pubkey: fromAccount, isSigner: true, isWritable: true },
  { pubkey: mintAccount, isSigner: false, isWritable: true },
  { pubkey: escrowOutAccount, isSigner: false, isWritable: true },
]
```

Seed the escrow out token account with `["escrow", mintAccountAsBuffer]`.

If the router needs to unwrap WSOL after a swap, make sure you create a temporary WSOL account with a throw-away keypair. That WSOL account needs to be owned by the payment router, seed it with `["escrow_sol"]`.

