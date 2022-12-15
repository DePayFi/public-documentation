---
sidebar_position: 1
sidebar_label: Tracking
---

# Payment Tracking

Create a payment tracking in order to validate and automate payments.

## POST

```
POST https://api.depay.com/v2/payments
```

Returns a `201` status code if payment tracking was created from scratch.

Returns a `200` status code if payment tracking already existed before.

This method implements [idempotency](https://datacadamia.com/design/idempotence). It will not create multiple tracking instances but will continue to provide the information for the given payment if the request is executed repeatedly.

It is required to setup a `callback`, as the payment tracker needs to make sure to persist the payment result with your systems before releasing the user to a confirmation.

Payment status starts with `pending` and changes to either `success` or `failed` (see [Payment Data Structure](/docs/apis/payments/data-structure)).

Make sure to re-attempt the `POST` request in case the request fails or returns anything but a `200/201`.

### Example Request

```javascript
{
  "blockchain": "ethereum",
  "transaction": "0xd4a9424440f6010af1bec311dda4e23d4f0016f4cc215da84a41650150ecb8b7",
  "sender": "0x29b0d4cb9cffeb360067199cf026dfd4854a8ab0",
  "nonce": "1",
  "receiver": "0x29b0d4cb9cffeb360067199cf026dfd4854a8ab0",
  "token": "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb",
  "amount": "822.5",
  "confirmations": 13,
  "after_block": 13609144,
  "callback": "https://webhook.site/4d4cd30f-d393-40f0-b909-85578a722ad7",
  "forward_to": "https://example.com/continue/after/74417770-e6ac-4ae8-b027-0657600d7bad",
  "payload": { "somekey": "somevalue" },
  "uuid": "74417770-e6ac-4ae8-b027-0657600d7bad"
}
```

### Required Attributes

[`blockchain`](/docs/apis/payments/data-structure#blockchain) - The name of the blockchain

[`transaction`](/docs/apis/payments/data-structure#transaction) - The transaction id expected to perform the payment

[`sender`](/docs/apis/payments/data-structure#sender) - The address of the payment sender.

[`nonce`](/docs/apis/payments/data-structure#nonce) - The sender nonce of the expected payment transaction.

[`receiver`](/docs/apis/payments/data-structure#receiver) - The receiver address of the expected payment.

[`token`](/docs/apis/payments/data-structure#token) - The address of the token expected as payment.

[`amount`](/docs/apis/payments/data-structure#amount) - Human readable expected payment amount (as string, to prevent rounding issues).

[`confirmations`](/docs/apis/payments/data-structure#confirmations) - The amount of block confirmations required before considering a payment completed.

[`after_block`](/docs/apis/payments/data-structure#after_block) - The block after which to expect the payment to happen. The current block right before the payment was submitted.

[`uuid`](/docs/apis/payments/data-structure#uuid) - Secret uuid referencing the payment identifcator in your system. Do not expose this to the public! UUID needs to be unguessable!

[`callback`](/docs/apis/payments/data-structure#callback) - Secret callback url. Needs to be hidden from the public and needs to be unguessable. Will be called once the payment status completes either with `success` or `failed`.

### Optional Attributes

[`payload`](/docs/apis/payments/data-structure#payload) - Allows to store additional, limited, payload information alongside the payment.

[`forward_to`](/docs/apis/payments/data-structure#forward_to) - URL used to forward users to, once payment tracking is completed. Users typically get to retry payments until they succeed and are only forwarded if payments succeed (default).

[`forward_on_failure`](/docs/apis/payments/data-structure#forward_on_failure) - Boolean indicating if a user is to be forwarded to `forward_to` also in the case of a `failed` payment. If set to `false` user gets to retry the payment until it succeeds (recommended).

[`fee_amount`](/docs/apis/payments/data-structure#fee_amount) - Expected payment fee amount. Human readable. As string, to prevent rounding issues.

[`fee_receiver`](/docs/apis/payments/data-structure#fee_receiver) - The receiver address of the fee (if fee has been configured).

### Example Response

```javascript
{
  "status": "pending",
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
  "payload": {
      "somekey": "somevalue"
  },
  "uuid": "74417770-e6ac-4ae8-b027-0657600d7bad",
  "callback": "https://webhook.site/4d4cd30f-d393-40f0-b909-85578a722ad7",
  "forward_to": "https://example.com/continue/after/74417770-e6ac-4ae8-b027-0657600d7bad",
  "forward_on_failure": false,
  "confirmed_at": null,
  "created_at": "2021-11-25T11:17:13.833Z",
  "updated_at": "2021-11-25T11:17:13.833Z"
}
```

## Callback

Once a payment changes state from `pending` to either `success` or `failed` your system will retrieve a callback to the endpoint provided with `callback`.

The callback request uses the `POST` method.

Respond with `200` if your system is ready immediately upon response to handle the redirected user to perform next steps in your system.

Respond with `202` if your system accepts the callback, but is performing background processing that needs to be finished before the user is supposed to be redirected/released to the next step in your user flow.
In the case of performing background processing you need to make sure to [perform an additional request to release the user](#background-processing).

Other codes but `200` or `202` will be considered a failed callback and will be retried up to 25 times over approx. 21 days. After that you will need to retrieve the data for the payment from your systems with another payment request.

Payment callbacks will retry failures with an exponential backoff using the formula `(retry_count ** 4) + 15 + (rand(30) * (retry_count + 1)) (i.e. 15, 16, 31, 96, 271, ... seconds + a random amount of time)`.

Make sure you evaluate the `status` of the payment callback in order to decide what to do in your systems next.

### Example Request

```
POST <YOUR PROVIDED CALLBACK ENDPOINT>
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
  "payload": {
      "somekey": "somevalue"
  },
  "uuid": "74417770-e6ac-4ae8-b027-0657600d7bad",
  "callback": "https://webhook.site/4d4cd30f-d393-40f0-b909-85578a722ad7",
  "forward_to": "https://example.com/continue/after/74417770-e6ac-4ae8-b027-0657600d7bad",
  "forward_on_failure": false,
  "confirmed_at": "2021-11-25T12:54:52.332Z",
  "created_at": "2021-11-25T11:17:13.833Z",
  "updated_at": "2021-11-25T11:17:13.833Z"
}
```

Learn more about the [Payment Data Structure](/docs/apis/payments/data-structure)

### Validate Requests

In order to validate the origin of the payment callback request, and to make sure the payment callback request did not originate from another third party, you need to:

- Validate that the provided `uuid` in the callback request matches with what you've stored within your systems.

- (Optional) Validate the `x-signature` header to also cryptographically ensure the request came from DePay's APIs.

#### Validate Request Signatures

To start validating callback request signatures, retrieve your personal API public key via **[DePay App](https://app.depay.com)** > **API** > **Issue API Public Key**.

Store the API public key and use it to validate payment callbacks in your systems.

Once you've issued an API public key, DePay APIs will start sending a signature (dedicated to your account) along with callback payloads.

DePay uses RSA-PSS, salt length 64, SHA256 to sign callback bodies, sending the signature base64 safe url encoded via the `x-signature` header.

##### Javascript & Node

You can use the following libraries to verify signatures sent by DePay APIs:

- [JavaScript/Node](https://github.com/DePayFi/js-verify-RSA-PSS-SHA256#quickstart)

##### Ruby

Following an example to verify signatures in Ruby/Rails:

```ruby
public_key = OpenSSL::PKey::RSA.new(stored_public_key)
signature_decoded = Base64.urlsafe_decode64(request.headers["X-Signature"])
data = request.raw_post
verified = public_key.verify_pss("SHA256", signature_decoded, data, salt_length: :auto, mgf1_hash: "SHA256")
```

##### PHP

Following an example to verify signatures in PHP:

```php
use phpseclib3\Crypt\RSA;
use phpseclib3\Crypt\PublicKeyLoader;

$signature = $request->get_header('x-signature');
$signature = str_replace("_","/",  $signature);
$signature = str_replace("-", "+",  $signature);
$key = PublicKeyLoader::load($public_key)->withHash('sha256')->withPadding(RSA::SIGNATURE_PSS)->withMGFHash('sha256')->withSaltLength(64);
$key->verify($request->get_body(), base64_decode($signature));
```

##### Other programming languages

You can read up on how to verify RSA PSS signatures in other programming languages: [here](https://cloud.google.com/kms/docs/samples/kms-verify-asymmetric-signature-rsa).


## Background Processing

In the case you need to perform additional background processing upon recieving the payment callback, you will need to control the release of the user explicitly.

If you do need to perform background processing that takes longer than **5 seconds** respond with a `202` upon the payment callback request, otherwise respond with a `200`, release the user immediately upon the callback request and skip the entire "Background Processing" section.

Execute your background processing and once you're done and ready to further handle the user within your user flow, make the following request:

```
POST https://api.depay.com/v2/payments/release
```

This will forward the user to configured `forward_to` (which can be [set upon payment tracking creation](#example-request)). If the `forward_to` is not set, the payment widget will turn into a "completed state" and allows the user to close the payment widget.

Make sure to re-attempt the `POST` request in case the request fails or returns anything but a `200`.

### Example Request

```javascript
{
  "blockchain": "ethereum",
  "transaction": "0xd4a9424440f6010af1bec311dda4e23d4f0016f4cc215da84a41650150ecb8b7",
  "sender": "0x29b0d4cb9cffeb360067199cf026dfd4854a8ab0",
  "nonce": "1",
  "uuid": "74417770-e6ac-4ae8-b027-0657600d7bad"
}
```

### Required Attributes

[`blockchain`](/docs/apis/payments/data-structure#blockchain) - The name of the blockchain

[`transaction`](/docs/apis/payments/data-structure#transaction) - The transaction id expected to perform the payment

[`sender`](/docs/apis/payments/data-structure#sender) - The address of the payment sender.

[`nonce`](/docs/apis/payments/data-structure#nonce) - The sender nonce of the expected payment transaction.

[`uuid`](/docs/apis/payments/data-structure#uuid) - Secret uuid referencing the payment identifcator in your system. Do not expose this to the public! UUID needs to be unguessable!

## GET

```
GET https://api.depay.com/v2/payments/{uuid}
```

We recommend to only rely on the payment `callback` while [creating the payment tracking](/docs/apis/payments/tracking#post), but you can also retrieve the payment status via a GET request.

Just make sure you don't run into [API call limitations](/docs/apis/authentication#limitations) that way and use reasonable pauses between requests (we recommend 1 minute polling).

### Example Request

```
GET https://api.depay.com/v2/payments/45b55d24-60d0-45ba-9800-c61835494dc8-3
```

### Example Response

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
  "payload": {
      "somekey": "somevalue"
  },
  "uuid": "74417770-e6ac-4ae8-b027-0657600d7bad",
  "callback": "https://webhook.site/4d4cd30f-d393-40f0-b909-85578a722ad7",
  "forward_to": "https://example.com/continue/after/74417770-e6ac-4ae8-b027-0657600d7bad",
  "forward_on_failure": false,
  "confirmed_at": "2021-11-25T12:54:52.332Z",
  "created_at": "2021-11-25T11:17:13.833Z",
  "updated_at": "2021-11-25T11:17:13.833Z"
}
```

Learn more about the [Payment Data Structure](/docs/apis/payments/data-structure)

