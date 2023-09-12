---
sidebar_position: 11
sidebar_label: Validation
---

# Payment validation

DePay is committed to ensuring the integrity and authenticity of all payments processed through its services.

To achieve this, a rigorous validation routine has been established.
During this process, DePay confirms the origin of the funds by checking the sender and verifies the end recipient through the receiver address.
The uniqueness of each transaction is maintained using a nonce, while the specific digital asset being transacted is identified via the token transferred.
Lastly, the exact quantity of the token being recevied is validated.

Once all these parameters align correctly, a payment receives the "success" status.

Depending on the nature and amount of the transaction, DePay's validation strategy varies.
For transactions valued under $1000, they are processed efficiently with a single network confirmation, keeping in mind the specific integration type.

However, for those payments that exceed the $1000 mark, or if configured otherwise, DePay adopts a more cautious approach.
Instead of just relying on initial confirmations, it is imperative that the transaction reaches a "finalized" status on its respective blockchain network.

## Extended validation

For high-value transactions, those above $1000, or if configured otherwise, the system waits for a set number of block confirmations, a figure that is determined by the specificities of the underlying blockchain.

Different blockchains have varying benchmarks for what constitutes a "finalized" transaction, and DePay is attuned to each of these nuances, ensuring the utmost accuracy and security in payment validation.

| Blockchain | Blocks | Seconds |
|------------|--------|---------|
| Ethereum   | 12     | 144s    |
| BSC        | 15     | 45s     |
| Polygon    | 256    | 512s    |
| Solana     | 16     | 1s      |
| Fantom     | 5      | 10s     |
| Avalanche  | 2      | 2s      |
| Gnosis     | 60     | 300s    |
| Arbitrum   | 120    | 34s     |
| Optimism   | 100    | 40s     |
| Base       | 100    | 40s     |
