---
sidebar_position: 4
sidebar_label: Data Structure
---

# Payment Data Structure

Learn how DePay Payment objects are structured.

```javascript
{
  "status": "success",
  "failed_reason": undefined,
  "blockchain": "ethereum",
  "transaction": "0xd4a9424440f6010af1bec311dda4e23d4f0016f4cc215da84a41650150ecb8b7",
  "sender": "0x29b0d4cb9cFfEB360067199cf026dfD4854A8aB0",
  "nonce": "1",
  "receiver": "0x29b0d4cb9cFfEB360067199cf026dfD4854A8aB0",
  "token": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
  "decimals": 18,
  "confirmations": 13,
  "after_block": "13609144",
  "amount": "822.5",
  "fee_amount": undefined,
  "fee_receiver": undefined,
  "payload": {
    "somekey": "somevalue"
  },
  "secret_id": "74417770-e6ac-4ae8-b027-0657600d7bad",
  "callback": "https://webhook.site/74417770-e6ac-4ae8-b027-0657600d7bad",
  "release": true,
  "forward_to": "https://example.com/payments/depay/confirmation",
  "forward_on_failure": false,
  "confirmed_at": "2021-11-25T12:54:52.332Z",
  "created_at": "2021-11-25T11:17:13.833Z",
  "updated_at": "2021-11-25T12:54:52.334Z"
}
```

## status

Status can either be `pending`, `success` or `failed`.

In case a payment `failed` it will also provide a value for `failed_reason`.

## failed_reason

In case a payment failed, the reason it failed will be provided via `failed_reason` and can be one of the following values:

- `FAILED` in cases where the payment transaction simply failed on the blockchain
- `MISMATCH` in cases where the expectation provided does not match with what actually happened in the transaction
- `TRANSACTION_MISMATCH` in cases where the transaction_id mismatches with the expected transaction_id
- `TOKEN_MISMATCH` in cases where the token mismatches with the expected token address
- `SENDER_MISMATCH` in cases where the sender mismatches with the expected sender address
- `RECEIVER_MISMATCH` in cases where the receiver mismatches with the expected receiver address
- `NONCE_MISMATCH` in cases where the nonce mismatches with the expected nonce
- `AMOUNT_MISMATCH` in cases where the amount mismatches with the expected amount
- `TRACKING_TIMED_OUT` in cases where the tracking could not be completed within 24h

## blockchain

The blockchain the payment is executed/settled. Can be one of:

- `ethereum` for Ethereum
- `bsc` for BNB Smart Chain
- `polygon` for Polygon/Matic

## transaction

The transaction id/hash of the payment.

## sender

The sender address of the payment.

## nonce

The nonce (Number only used once) of the sender for the payment transaction as a string.

## receiver

The receiver address of the payment.

## token

The received token of the payment.

## decimals

The decimals of the token received.

## confirmations

The confirmations (amount of blocks including the payment transaction) required to confirm the payment.

## after_block

The block after which to expect the payment to happen. The current block right before the payment was submitted. Required to scan for replaced payment transactions. As a string.

## amount

Expected amount. Human readable. As string, to prevent rounding issues.

## fee_amount

Expected payment fee amount. Human readable. As string, to prevent rounding issues.

## fee_receiver

Expected payment fee receiver address.

## payload

Arbitrary payload stored along with the payment.

## secret_id

Secret, universal unique identifier of the payment attempt. Suposed to identify the payment attempt within your systems. Do not expose this to the public! secret_id needs to be unguessable!

## callback

Secret callback url. Needs to be hidden from the public and needs to be unguessable. Will be called once the payment status completes either with `success` or `failed`.

## release

Boolean indicating if the user is to be released (from the payment widget).

## forward_to

URL used to forward the user to after payment has been completed.

## forward_on_failure

Boolean indicating if user is to be forwarded to `forward_to` also in the case of a `failed` payment.

## confirmed_at

Time when the payment was confirmed/validated.

## created_at

Time when the payment was initially created/submitted for tracking.

## updated_at

Time when the payment was last updated.


