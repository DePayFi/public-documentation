---
sidebar_position: 1
sidebar_label: Link
---

# Web3 Payment Link

Just create a link and send users to it.

## Example

https://buy.depay.com/201JapngwCukZzlvdZgR1K

## Step by step

### Create new link

Go to the DePay App on https://app.depay.com and create a Payment Link via **Links** > **New Link** and select **Payment Link**.

### Product

Enter a name for the product in order to allow users to understand what they are paying for.

You can also upload an image to represent the product visually.

### Seller

Enter a name for the seller in order to allow users to understand who they are paying.

You can also upload an image to represent the seller visually.

### Denomination

You can denominate your product either in a fiat- or a crypto-currency.

#### Fiat Currency

If you choose to denominate your product in a fiat-currency, you will need to enter the price for the procuct in the selected fiat-currency.
Real-time conversion rates are calculated the moment a customer visits the link in order to pay for the product.

**Example**
> You've decided to denominate your item in USD and price it with **USD 10.00**.
> You've also configured the link to receive ETH on the Ethereum network as means of payment.
> Once a customer visits the link to perform the payment the price of ETH is 1500 USD.
> Your customer needs to pay you **0.00667 ETH**.
> Conversions are also offered and calculated in real-time.

#### Crypto Currency

If you choose to denominate your product in a crypto-currency, you will need to enter the price for the procuct in every crypto-currency you are accepting as means of payment.
Real-time conversion rates are calculated the moment a customer visits the link in order to pay for the product.

**Example**
> You've decided to denominate your item in crypto-currencies.
> You've configured USDC (USD Coin by Circle) and USDT (USD by Tether) as receivables.
> You price the product for **10 USDC** and **10 USDT**.
> Once a customer visits the link to perform the payment that customer needs to pay you either **10 USDC** or **10 USDT**.
> Conversions are also offered and calculated in real-time.

### Tokens

Configure which tokens on which blockchains you want to receive as means of payment.

Select as few tokens per blockchain as possible, but select at least 1 token per blockchain for every blockchain you want to support.

### Receiver

Enter what address is supposed to receive the payments. Double-check the entered addresse as an incorrect address can lead to a loss of payments.

### Branding/Colors

You can select a primary color that will be used for the payment experience ensuring brand continuity throughout the payment experience.

### Collect Data

Payment Links allow you to gather the following, additional information from your users:

- Full Name
- E-Mail
- Shipping Address
- Country
- Quantity

### User Flow

Configure what is supposed to happen after a payment has been performed and validated succssfully:

- Redirect users back to you
- Show a payment confirmation without redirecting users back to you

### E-Mail Confirmations

You can configure Payment Links to automatically send payment confirmations per email after a successful payment:

- Send confirmation to your users
- Send confirmation to yourself

### Callback Request

If your systems need to be informed about incoming payments (e.g. for automation) configure a callback request.

Once the payment has been succesfully completed and validated the configured callback endpoint will receive the following request:

e.g. the configured callback endpoint is `https://example.com/payments/depay/callback`

```
POST https://example.com/payments/depay/callback
```

```javascript
{
  "status": "success",
  "failed_reason": undefined,
  "blockchain": "ethereum",
  "transaction": "0xd4a9424440f6010af1bec311dda4e23d4f0016f4cc215da84a41650150ecb8b7",
  "sender": "0x29b0d4cb9cffeb360067199cf026dfd4854a8ab0",
  "nonce": 1,
  "receiver": "0x29b0d4cb9cffeb360067199cf026dfd4854a8ab0",
  "token": "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb",
  "decimals": 18,
  "confirmations": 13,
  "after_block": 13609144,
  "amount": "822.5",
  "fee_amount": undefined,
  "fee_receiver": undefined,
  "payload": {
    "somekey": "somevalue"
  },
  "uuid": "74417770-e6ac-4ae8-b027-0657600d7bad",
  "callback": "https://webhook.site/74417770-e6ac-4ae8-b027-0657600d7bad",
  "release": true,
  "forward_to": "https://example.com/payments/depay/confirmation",
  "forward_on_failure": false,
  "confirmed_at": "2021-11-25T12:54:52.332Z",
  "created_at": "2021-11-25T11:17:13.833Z",
  "updated_at": "2021-11-25T12:54:52.334Z"
}
```

Learn more about the [Payment Data Structure](/docs/apis/payments/data-structure) in our API section.


### Integrate

Once you've provided all required information the app will generate a **Payment Link** that you can use.

Send your users to the link in order to perform payments as configured.

### Prefill Form Data

If you select to "Collect Data" during [link creation](#create-new-link) you can prefill all form fields with passing get parameters:

https://tip.depay.com/6KFBECVsokSt0UKOAug8CI?name=Max%20Musterman&country=CH

`name`: The full name of the payment sender.

`email`: The email of the payment sender.

`shipping_address`: The shipping address of the payment sender.

`country`: The ISO 3166-1 alpha-2 country code of the payment sender.

`quantity`: The preselected item quantity.

### Inject Payload Data

You can append get parameters to the generated payment link in order to inject payload data which will become part of the [payment callback request](#callback-request).

This e.g. allows you to track individual users or sessions by id throughout the payment flow.

```
https://tip.depay.com/6KFBECVsokSt0UKOAug8CI?payload[user_id]=1234567
```

or multiple parameters

```
https://tip.depay.com/6KFBECVsokSt0UKOAug8CI?payload[user_id]=1234567&payload[session_id]=89
```

Those values will reappear in the [payment callback request](#callback-request) in the following way:

```javascript
  {
    "payload": {
      "injected": {
        "user_id": 1234567,
        "session_id": 89
      }
    }
  }
```
