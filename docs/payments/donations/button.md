---
sidebar_position: 2
sidebar_label: Button
---

# Web3 Donation Button

Receive donations with the click of a button.

DePay's Web3 Donation Button allows you to directly accept Web3 Donations without any required experience in JavaScript. Just use our button HTML to open a donation widget that uses your configuration.

## Example

<div className="py-5">
  <DePayButton
    label={'Donate'}
    blockchains='["ethereum","bsc","polygon","solana","gnosis","fantom","avalanche","arbitrum","optimism","base"]'
    configuration={ {"title": "Donation","accept":[{"blockchain":"ethereum","token":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"polygon","token":"0x2791bca1f2de4661ed88a30c99a7a9449aa84174","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"solana","token":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","receiver":"B2mgZ4ddUcu7bimLThBahpizPysVJ7xTd2woScmWtPYr"},{"blockchain":"gnosis","token":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"fantom","token":"0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"avalanche","token":"0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"arbitrum","token":"0xaf88d065e77c8cC2239327C5EDb3A432268e5831","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"optimism","token":"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"base","token":"0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
</div>

```html
<div
  class="DePayButton"
  label="Donate"
  integration="1f517a0d-5bf3-4095-a096-c6b11d8e4d91"
  blockchains='["ethereum","bsc"]'
></div>
<script src="https://integrate.depay.com/buttons/v12.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

## Integration examples

Jump straight into example integrations for common frameworks and platforms:

<Tabs>

<TabItem value="Express" label="Express" default>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/DePayFi/buttons-example-express-js">https://github.com/DePayFi/buttons-example-express-js</a>
</TabItem>

<TabItem value="Next.js" label="Next.js" default>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/DePayFi/buttons-example-next-js">https://github.com/DePayFi/buttons-example-next-js</a>
</TabItem>

</Tabs>

## Create a button

Go to https://app.depay.com/dev/integrations and click "New Integration".

Make sure you select the "**Donation Button**" integration.

Give your integration a name so that you can identify it later on.

## Accepted tokens/blockchains

Choose the tokens you wish to accept as donation methods. Ensure you provide a receiving wallet address for every selected token.

## Place button html

Now you can place the integration code into your app and open the DePay Donation widget:

```javascript
<div
  class="DePayButton"
  label="Donate"
  integration="1f517a0d-5bf3-4095-a096-c6b11d8e4d91"
  blockchains='["ethereum","bsc"]'
></div>
<script src="https://integrate.depay.com/buttons/v12.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({document: document});</script>
```

## Redirect after donation

Enter the URL to which users should be redirected after a successful donation.

If you need to configure dynamic redirects, continue reading how to setup [dynamic configurations](#dynamic-configuration).

## Configure callbacks

Set up an endpoint to be called upon each successful donation.

The callbacks will execute a `POST` request to the specified URL.

Ensure you provide an HTTPS URL.

The callback's request body will be structured as follows:

```json
{
  "blockchain": "polygon",
  "transaction": "0x053279fcb2f52fd66a9367416910c0bf88ae848dca769231098c4d9e240fcf56",
  "sender": "0x317D875cA3B9f8d14f960486C0d1D1913be74e90",
  "receiver": "0x08B277154218CCF3380CAE48d630DA13462E3950",
  "token": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  "amount": "0.0985",
  "payload": null,
  "after_block": "46934392",
  "commitment": "confirmed",
  "confirmations": 1,
  "created_at": "2023-08-30T11:37:30.157555Z",
  "confirmed_at": "2023-08-30T11:37:35.492041Z"
}
```

:::caution

Make sure you callback endpoint responds with 200, as otherwise the widget will not release the user.

:::

### Redirect user

If you want to dynamically redirect users upon callback response, provide the location with `forward_to` as part of the callback response:

```json
{
  "forward_to": "https://example.com/depay/success/1212391238123"
}
```

## Verify communication

Copy the provided public key, store and use it in your application to verify all communications from DePay's APIs to your systems are authentic.

DePay APIs include an `x-signature` header with all requests sent to your systems.

Use that `x-signature` header together with the stored public key to verify the request is authentic.

DePay employs RSA-PSS with a salt length of 64 and SHA256 to sign request bodies. The signature is then sent base64 safe URL-encoded via the `x-signature` header.

<Tabs>

<TabItem value="javascript" label="JavaScript" default>

Use DePay's [verify-js-signature](https://github.com/DePayFi/js-verify-RSA-PSS-SHA256#functionoality) package for JavaScript & Node:

```javascript
import { verify } from '@depay/js-verify-signature'

let verified = await verify({
  signature: req.headers['x-signature'],
  data: JSON.stringify(req.body),
  publicKey,
});

if(!verified){ throw('Request was not authentic!') }
```

</TabItem>

<TabItem value="ruby" label="Ruby" default>

```ruby
public_key = OpenSSL::PKey::RSA.new(STORED_PUBLIC_KEY)
signature_decoded = Base64.urlsafe_decode64(request.headers["X-Signature"])
data = request.raw_post

verified = public_key.verify_pss(
  "SHA256",
  signature_decoded,
  data,
  salt_length: :auto,
  mgf1_hash: "SHA256"
)

raise 'Request was not authentic' unless verified
```

</TabItem>

<TabItem value="php" label="PHP" default>

```php
use phpseclib3\Crypt\RSA;
use phpseclib3\Crypt\PublicKeyLoader;

$signature = $request->get_header('x-signature');
$signature = str_replace("_","/",  $signature);
$signature = str_replace("-", "+",  $signature);
$key = PublicKeyLoader::load($public_key)->withHash('sha256')->withPadding(RSA::SIGNATURE_PSS)->withMGFHash('sha256')->withSaltLength(64);

if( !$key->verify($request->get_body(), base64_decode($signature)) ) {
  throw new Exception("Request was not authentic");
}
```

</TabItem>

<TabItem value="other" label="Other" default>

You can read up on how to verify RSA PSS signatures in other programming languages: [here](https://cloud.google.com/kms/docs/samples/kms-verify-asymmetric-signature-rsa).

</TabItem>

</Tabs>

## Restrict domains

Integrations permit usage and embedding exclusively on websites hosted on specified domains.

If no domain is entered, domain restriction is entirely deactivated.

Once you specify even a single domain, restriction enforcement is activated.

It's essential to list each domain and subdomain you wish to support separately.

For instance: `example.com`, `www.example.com`, `pay.example.com`.

## Dynamic configuration

To pass a dynamic configuration the the button, such as for conveying dynamic prices or for initiating dynamic redirects after successful donations, you'll need to activate dynamic configurations for the specified integration.

After activation, your dynamic configuration - supplied via an API endpoint from your system - must return [a valid widget configuration](https://github.com/DePayFi/widgets#configuration). This configuration should, at a minimum, detail the accepted donations, including blockchains, tokens, amount, and receiver.

:::caution

Ensure you supply the widget configurations through your designated API endpoint. Do not pass the "accept" parameter directly to the widget during frontend initialization.

:::

### Set endpoint

First, you must specify an HTTPS URL endpoint that the integration will call each time someone attempts to make a donation.

:::caution

Endpoints need to respond a dynamic configuration under **2 seconds** or requests will be dropped otherwise and the widget will not load.

:::

### Create private/public key

Similarly to how DePay APIs ensure the authenticity of requests to your systems by cryptographically signing request bodies with RSA-PSS, you'll need to employ the same method when implementing dynamic configurations.

To begin signing your dynamic configuration responses, first generate a private key.

Ensure you have [OpenSSL](https://www.openssl.org/) installed to generate private keys.

#### Install OpenSSL

<Tabs>

<TabItem value="mac" label="macOS" default>

Best to use [Homebrew](https://brew.sh/).

```bash
brew update
brew install openssl
```

</TabItem>

<TabItem value="windows" label="Windows" default>

https://wiki.openssl.org/index.php/Binaries

</TabItem>

<TabItem value="debian" label="Debian/Ubuntu" default>

```bash
sudo apt update
sudo apt install openssl
```

</TabItem>

</Tabs>


#### Generate private key

```bash
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```

:::danger

Please ensure you adhere to the highest security standards when working with private keys. Never share or publicly disclose the private key.

:::

#### Generate public key

```bash
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

#### Store public key

Now take the content of the `public_key.pem` (not the private key!) and store it with your integration on https://app.depay.com.

The public key format looks like:

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4PlPK+oM4nQX5TcmnWAE
UMtd5hL8irx1Fbmwtpg4P7aQA1Y7RJ7/JwEMKs4+kJcgSQqqBoil+YgP2WSGtDnp
ar4jIFIPDWY+eWBe3kGqqse+OxyuVMG/k4iMyQG7wB/9l4gY2udi6qciBiSDlNpo
cs7X+zPrnL1jaO9C85yaEBAe4qpRUXhyjZ32DfduDeCP7p2O+cNHXzNwppsWApnE
L8LOX/UkSlSaduJL2pOEv3zcTupOo38fds7V3MmqaxJfMfH9mWMbvVPfEJ2eeEx6
GKnXhyKyW3MH69iEFCrFgAEk/HKI2bAck4DOyh5wVD4bdks0a9cXRWHI747auCeZ
sQIDAQAB
-----END PUBLIC KEY-----
```

### Integrate responses

After setting up an endpoint and registering a public key with the integration, you can begin tailoring your endpoint to return dynamic configurations.

#### Incoming requests

Incoming requests will have the following headers:

```
Accept: application/json,application/vnd.api+json
Accept-Charset: utf-8
Content-Type: application/json; charset=utf-8
X-Signature: 0Lt-bOwigLB_tPzWev5Iwe1YeWFWQ1fTi31wolfisWXuSKfuj53MujGfxkDli_A3R4IgFpgfEF6KmU1tDqYn2bId2HiFG6MYf5v25bhLscJnwAlGyVYMVmnxYyuPYsHMTZvZx61LSxC52TavRw4LN5wq9ux4nw4B30rnqCAaYKAZcUgpKgUwsMRToY0D8AwwW2mkkFk5rJKdx0LAnhz0dpGx5b5lc1v7UbcdzvteU8PBzyXcT2hQ-lMo8dTcdFM6tr_xJRrlxEOzeAKB3b2EfOKS_H9AtzICXT-NGc-HvgWKI56NURAheJweKdAvV7AF5atWTjSLnTFAHFl4NkLFsg==
```

Ensure you verify the incoming `x-signature` header to confirm the request's authenticity. [How to verify communication](#verify-communication).

#### Basic response

Responses need to be formatted in JSON.

A basic response includes a fundamental widget configuration detailing the list of accepted tokens for the respective donation. In a basic setup, donations are denominated in tokens:

```json
{
  "accept": [
    {
      "blockchain": "ethereum",
      "token": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "receiver": "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"
    }
  ]
}
```

This configuration accepts USDT on the Ethereum blockchain sent to `0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02` as donation.

Consult the [widget documentation](https://github.com/DePayFi/widgets#configuration) for a deeper understanding of how widget configurations operate.

#### Sign your response

For secure communication, DePay mandates the use of RSA-PSS to sign your response, specifying a salt length of 64 and utilizing the SHA256 hashing algorithm. Once signed, ensure that you encode the signature in a base64 URL-safe format and transmit it through the x-signature header:

```
X-Signature: 0Lt-bOwigLB_tPzWev5Iwe1YeWFWQ1fTi31wolfisWXuSKfuj53MujGfxkDli_A3R4IgFpgfEF6KmU1tDqYn2bId2HiFG6MYf5v25bhLscJnwAlGyVYMVmnxYyuPYsHMTZvZx61LSxC52TavRw4LN5wq9ux4nw4B30rnqCAaYKAZcUgpKgUwsMRToY0D8AwwW2mkkFk5rJKdx0LAnhz0dpGx5b5lc1v7UbcdzvteU8PBzyXcT2hQ-lMo8dTcdFM6tr_xJRrlxEOzeAKB3b2EfOKS_H9AtzICXT-NGc-HvgWKI56NURAheJweKdAvV7AF5atWTjSLnTFAHFl4NkLFsg==
```

:::caution

Ensure that you sign the response as string format and that the json string does not contain any line-breaks (\n) or unessary whitespace.

:::

<Tabs>

<TabItem value="node" label="Node" default>

```js
const { Buffer } = require("node:buffer");
import crypto from 'node:crypto';

const privateKeyString = process.env.MY_PRIVATE_KEY;
const privateKey = crypto.createPrivateKey(privateKeyString);

const configuration = {
  /// your dynamic configuration
}

const dataToSign = JSON.stringify(configuration);

const signature = crypto.sign('sha256', Buffer.from(dataToSign), {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  saltLength: 64,
});

const urlSafeBase64Signature = signature.toString('base64')
  .replace('+', '-')
  .replace('/', '_')
  .replace(/=+$/, '');

res.setHeader('x-signature', urlSafeBase64Signature);

return JSON.stringify(configuration) // make sure to return JSON without line-breaks (\n) or unnessary whitespace
```

</TabItem>

<TabItem value="ruby" label="Ruby / Rails" default>

```ruby
private_key = OpenSSL::PKey::RSA.new(ENV['MY_PRIVATE_KEY'])
signature = private_key.sign_pss("SHA256", response.to_json, salt_length: 64, mgf1_hash: "SHA256")
headers['x-signature'] = Base64.urlsafe_encode64(signature)
```

</TabItem>

</Tabs>

### Passthrough payload

If your dynamic configuration depends on data initially provided the the button (on the frontend) and this data needs to be relayed to your backend for determining the dynamic configuration, pass your payload the the button during initialization:

```javascript
<div
  class="DePayButton"
  label="Donate"
  integration="1f517a0d-5bf3-4095-a096-c6b11d8e4d91"
  blockchains='["ethereum","bsc"]'
  payload='{"user": "123123123"}'
></div>
```

By doing so, the payload will be included when calling your configured endpoint. The request body directed towards your configured endpoint will now encompass:

```json
{
  "user": "123123123"
}
```

### Dynamic user flow/redirect

For scenarios necessitating the redirection of users to dynamic URLs — which can vary per payment event, such as directing users to diverse confirmation screens — utilize the `forward_to` parameter within your dynamic configuration response:

```json
{
  
  "forward_to": "https://example.com/depay/success/1212391238123"

}
```

## Finality

DePay employs two distinct confirmation levels for payment validation based on the transaction value and the underlying blockchain's characteristics.
Payments below USD $1,000 are designated as "confirmed" after a single block confirmation.
In contrast, payments valued at USD $1,000 or above receive the "finalized" status, which necessitates varying block confirmations depending on the specific blockchain in use:

For an in-depth overview, explore the [extended validation section](/docs/payments/validation#extended-validation).
