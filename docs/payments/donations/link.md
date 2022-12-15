---
sidebar_position: 1
sidebar_label: Link
---

# Web3 Donation Link

Just create a link and start receiving donations.

## Example

https://donate.depay.com/1Ylujunhrm59HyLFuv7WwZ

## Step by step

### Create new link

Go to the DePay App on https://app.depay.com and create a Payment Link via **Links** > **New Link** and select **Donation Link**.

### Cause/Project

Enter a name for the cause/project in order to allow users to understand what they are donating for.

You can also upload an image to represent the cause/project visually.

### Charity/Foundation

Enter a name for the charity/foundation in order to allow users to understand who is receiving the donation.

You can also upload an image to represent the charity/foundation visually.

### Tokens

Configure which tokens on which blockchains you want to receive as donations.

Select as few tokens per blockchain as possible, but select at least 1 token per blockchain for every blockchain you want to support.

### Receiver

Enter what address is supposed to receive the donations. Double-check the entered addresse as an incorrect address can lead to a loss of donations.

### Amounts

Enter up to 3 suggested amounts that the user can select quickly to perfom a donation.

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
  "nonce": "1",
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

Other codes but 200 or 202 will be considered a failed callback and will be retried up to 25 times over approx. 21 days.

Payment callbacks will retry failures with an exponential backoff using the formula (retry_count ** 4) + 15 + (rand(30) * (retry_count + 1)) (i.e. 15, 16, 31, 96, 271, ... seconds + a random amount of time).

### Integrate

Once you've provided all required information the app will generate a **Payment Link** that you can use.

Send your users to the link in order to perform payments as configured.

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
