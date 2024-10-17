---
sidebar_position: 4
sidebar_label: Mini App & World App
title: Integrate DePay Payments into your Mini app built on World App.
---

# Mini App Payments

Integrate DePay Payments into your Mini app built on World App.

## Example

![Mini Apps on World App](/img/examples/mini-app/example.png)

### Configuring Your Mini App

To integrate DePay into your Mini App, proper configuration is essential.

All Mini Apps using DePay must set the DePay Router Smart Contract address as the "Contract Entrypoint" in your app's configuration.

Here’s how to do it:

1. Go to the [World App Developer Portal](https://developer.worldcoin.org/).

2. Select your app and navigate to Configuration > Advanced.

3. Make sure you add `https://depay.com` as an "Additional Domain".

![depay.com as Additional Domain](/img/examples/mini-app/additional-domain.png)

4. Add `0xC9850b32475f4fdE5c972EA6f967982a3c435D10` under "Contract Entrypoints".

![DePay contract entrypoint](/img/examples/mini-app/contract-entrypoint.png)

5. Next, you'll need to add the token addresses for any tokens you want users to transact with. You can find a complete list of tokens deployed on World Chain [here](https://worldchain-mainnet.explorer.alchemy.com/tokens).

![Permit2 token configuration](/img/examples/mini-app/permit2-tokens.png)

`0x79A02482A880bCE3F13e09Da970dC34db4CD24d1,0x2cFc85d8E48F8EAB294be644d9E25C3030863003` would allow `USDCe` and `WDL`.


### Integrate DePay

Afterwards you can integrate and use DePay within your Mini App:

- [Integrate a payment link](/docs/payments/integrate/link)

- [Integrate a managed widget integration](/docs/payments/integrate/widget)

- [Use DePay for Shopify](/docs/payments/plugins/shopify)

- [Use DePay for WooCommerce](/docs/payments/plugins/woocommerce)

- [Use DePay for WordPress](/docs/payments/plugins/wordpress/)
