---
sidebar_position: 11
sidebar_label: Verify
---

# Don't Trust, Verify

Living by the motto, "Don't Trust, Verify", DePay's payment protocol empowers everyone to verify payments before executing them.

## Wallets

Wallets can seamlessly incorporate an auto-verification feature for payments made via the DePay payment protocol.

This enhancement aids users in comprehending the transactions they're executing.

Every wallet can integrate a "Payment" screen when users initiate a payment using the DePay payment protocol.

[Learn how wallets can integrate a verified "Payment" screen](/docs/wallets/payment-screen)

## Verification form

The following form allows you to validate DePay payments quickly:

<PaymentDecoder/>

## Verify manually

Even if your wallet doesn't support integrated DePay Payment verification, you can utilize this page to manually validate the payment on your own.

### Verify contract address

The DePay protocol address operates as a trusted and audited smart contract, designed to streamline payment processes.

Upon initializing a payment, your wallet will showcase a transaction overview.

The first step is to ensure that the contract you're interacting with is indeed the DePay payment protocol.

#### On blockchain explorer

Click on the contract address, or copy it in order to open it on a blockchain explorer.

DePay's payment smart contracts are presently labeled on blockchain explorers as `DePay: Router v2`.
If you access the contract address on the blockchain explorer, ensure that the contract carries this exact label.

#### On DePay's deployment page

Alternatively, you can also check that the contract address you are interacting with is listed on DePay's [protocol deployment page](https://depay.com/docs/payments/protocol/deployments/).

### Verify payment details

If your wallet provides you with the `HEX` calldata prepared to call the DePay payment protocol, you can ue the [Verification Form](#verification-form) on this to easily validate the payment.

#### Verify decoded transactions

Some wallets that support transaction decoding will be able to display the payment details in a more human readable way:

```
[
  10000,
  false,
  9850,
  150,
  "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "0x0000000000000000000000000000000000000000",
  "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "0x317D875cA3B9f8d14f960486C0d1D1913be74e90",
  "0x7b94266CA5cC36005b3043e1ffE5EBd624494731",
  0,
  0,
  "0000000000000000000000000000000000000000",
  "0000000000000000000000000000000000000000",
  1693573293
]
```

Those parameters have the following meaning, from the top to bottom:

**#1** is the amount paid. In our example `10000`. If the paid in token has e.g. 6 decimals, like in this example, this means you will pay in 0.01.

**#2** indicates whether the payment utilizes Permit2 (a standard for granting token usage approvals to smart contracts) or not. If set to false, tokens will be transferred based on prior token approvals, which are granted in a distinct, dedicated transaction.

**#3** specifies the amount that will be disbursed to the payment receiver. If the payout token, for instance, has 6 decimals, as in this example, it means 0.00985 of the payout token will be transferred to the payment recipient.

**#4** specifies the amount that will be disbursed to the fee receiver. If the payout token, for instance, has 6 decimals, as in this example, it means 0.00015 of the payout token will be transferred to the payment recipient.

**#5** represents the address of the token being paid with. This specific token will be deducted from your wallet to complete this payment.

**#6** represents the address of the exchange used to perform a conversion as part of the payment. If this is set to `0x0000000000000000000000000000000000000000` no conversion will be performed.

**#7** represents the address of the token used as payout. The payment and fee receiver will receive this token as part of this payment.

**#8** represents the address of the payment receiver. This address will receive the amount specified in line #3.

**#9** represents the address of the fee receiver. This address will receive the amount specified in line #4.

**#10** defines the type of how to convert tokens with the exchange defined in line #6.

**#11** defines the type of how to forwarded payments to a smart contract receiver if payment receiver in line #3 is a smart contract.

**#12** defines the data used to execute the conversion on the exchange defined in lien #6.

**#13** defines the data used to call the payment receiver if the receiver is a smart contract and supposed to be called.

**#14** defines the timestamp after which the payment will be dropped by the payment protocol.
