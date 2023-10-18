---
sidebar_position: 3
sidebar_label: Widget
title: Integrate Web3 Payment Widget
---

# Web3 Payment Widget

Self-host and controll the entire payment flow within your app.

## Example

<div className="widget-example pt-3" style={{ height: "245px" }}>
  <div className="ReactDialog ReactDialogOpen">
    <div className="ReactDialogRow">
      <div className="ReactDialogCell">
        <div className="ReactDialogStack active forward">
          <div className="ReactDialogStackRow">
            <div className="ReactDialogStackCell">
              <div className="ReactDialogAnimation">
                <div className="Dialog">
                  <div className="DialogHeader">
                    <div className="DialogHeaderTitle">
                      <div className="PaddingTopS PaddingLeftM PaddingRightM">
                        <h1 className="FontSizeL TextLeft">Payment</h1>
                      </div>
                    </div>
                    <div className="DialogHeaderActionRight PaddingTopS PaddingLeftS PaddingRightS">
                      <button className="ButtonCircular" title="Close dialog">
                        <svg className="CloseIcon Icon" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <line x1="18" x2="6" y1="6" y2="18"></line>
                          <line x1="6" x2="18" y1="6" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="DialogBody">
                    <div className="PaddingTopS PaddingLeftM PaddingRightM PaddingBottomXS">
                      <div className="Card" title="Change payment">
                        <div className="CardImage">
                          <img className="js-widget-payment-example-image" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"/>
                        </div>
                        <div className="CardBody">
                          <div className="CardBodyWrapper">
                            <h2 className="CardText">
                              <div className="TokenAmountRow">
                                <span className="TokenSymbolCell js-widget-example-symbol">ETH</span>
                                <span className="TokenAmountCell js-widget-example-amount">0.013</span>
                              </div>
                              <div class="TokenAmountRow small grey">
                                <span class="TokenSymbolCell">US$10.00</span>
                              </div>
                            </h2>
                          </div>
                        </div>
                        <div className="CardAction">
                          <svg className="ChevronRight Icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fillRule="evenodd" strokeWidth="1"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="DialogFooter">
                    <div className="PaddingTopXS PaddingRightM PaddingLeftM PaddingBottomM">
                      <div>
                        <button className="ButtonPrimary">Pay</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="pt-5 pb-1">
  <DePayWidgetTest
    className="text-center"
    label={'Click to test widget'}
    configuration={ {"accept":[{"blockchain":"ethereum","amount":20,"token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","amount":20,"token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
</div>

## Integration examples

Jump straight into example integrations for common frameworks and platforms:

<Tabs>

<TabItem value="Express" label="Express" default>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/DePayFi/widgets-example-express-js">https://github.com/DePayFi/widgets-example-express-js</a>
</TabItem>

<TabItem value="Next.js" label="Next.js" default>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/DePayFi/widgets-example-next-js">https://github.com/DePayFi/widgets-example-next-js</a>
</TabItem>

</Tabs>

## Installation

### Package

You can install DePay Widgets via `yarn` or `npm` and build it as part of your application:

<Tabs>

<TabItem value="yarn" label="Yarn" default>

```bash
yarn add @depay/widgets
```

</TabItem>

<TabItem value="npm" label="NPM" default>

```bash
npm install @depay/widgets --save
```

</TabItem>

</Tabs>

Make sure you install DePay widgets peer dependencies, too, in case your project does not have them installed yet:

<Tabs>

<TabItem value="yarn" label="Yarn" default>

```bash
yarn add ethers react react-dom
```

</TabItem>

<TabItem value="npm" label="NPM" default>

```bash
npm install ethers react react-dom --save
```

</TabItem>

</Tabs>

### CDN

If you don't want to install the package or don't want to build DePay Widgets as part of your application, you can also load DePay Widgets via our CDN:

```html
<script defer async src="https://integrate.depay.com/widgets/v12.js"></script>
```

## Create an integration

Go to https://app.depay.com/dev/integrations and click "New Integration".

Make sure you select the "**Payment Widget**" integration.

Give your integration a name so that you can identify it later on.

## Set price

Enter the price that needs to be paid.

If you need to configure dynamic pricing, continue reading how to setup [dynamic configurations](#dynamic-configuration).

If not, proceed with dynamic configuration turned off.

### Denominate in currency

If you set a price in a specific currency, real-time rates will be applied to ensure you receive an amount of the accepted tokens that corresponds to your configured currency price.

### Denominate in tokens

If you set a price in tokens, you'll receive the precise amount specified for each token.

## Accepted tokens/blockchains

Choose the tokens you wish to accept as payment methods. Ensure you provide a receiving wallet address for every selected token.

## Place integration code

Now you can place the integration code into your app and open the DePay Payment widget:

```javascript
import DePayWidgets from "@depay/widgets"

DePayWidgets.Payment({
  integration: 'YOUR-INTEGRATION-ID'
});
```

## Redirect after payment

Enter the URL to which users should be redirected after a successful payment.

If you need to configure dynamic redirects, continue reading how to setup [dynamic configurations](#dynamic-configuration).

## Configure callbacks

Set up an endpoint to be called upon each successful payment.

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

Copy the public key provided for your integration (on [app.depay.com](https://app.depay.com)), store and use it in your application to verify all communications from DePay's APIs to your systems are authentic.

DePay's api calls include an `x-signature` header with all requests sent to your systems.

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

<TabItem value="python" label="Python" default>

```python
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding
import base64

# Load the public key
public_key = serialization.load_pem_public_key(PUBLIC_KEY.encode('utf-8'))

# Decode the signature from the headers
signature_decoded = base64.urlsafe_b64decode(request.headers["X-Signature"])

# Get the raw post data
data = request.data

# Verify the signature
try:
    public_key.verify(
        signature_decoded,
        data,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
except InvalidSignature:
    raise ValueError('Request was not authentic')
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

To pass a dynamic configuration to the widget, such as for conveying dynamic prices or for initiating dynamic redirects after successful payments, you'll need to activate dynamic configurations for the specified integration.

After activation, your dynamic configuration - supplied via an API endpoint from your system - must return [a valid widget configuration](https://github.com/DePayFi/widgets#configuration). This configuration should, at a minimum, detail the accepted payments, including blockchains, tokens, amount, and receiver.

:::caution

Ensure you supply the widget configurations through your designated API endpoint. Do not pass the "accept" parameter directly to the widget during frontend initialization.

:::

### Set endpoint

First, you must specify an HTTPS URL endpoint that the integration will call each time someone attempts to make a payment.

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

```bash

```

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

A basic response includes a fundamental widget configuration detailing the list of accepted tokens for the respective payment. In a basic setup, payments are denominated in tokens:

```json
{
  "accept": [
    {
      "blockchain": "ethereum",
      "amount": 20,
      "token": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "receiver": "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"
    }
  ]
}
```

This configuration accepts 20 USDT on the Ethereum blockchain sent to `0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02` as payment.

:::info

When interacting with DePay, you always pass human readable amounts (not BigNumbers).

:::

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

<TabItem value="python" label="Python" default>

```python
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding
import base64
import json
import os

# Load the private key
private_key_bytes = os.environ['MY_PRIVATE_KEY'].encode('utf-8')
private_key = serialization.load_pem_private_key(private_key_bytes, password=None)

# Sign the response data
response_data = json.dumps(response).encode('utf-8')
signature = private_key.sign(
    response_data,
    padding.PSS(
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=64
    ),
    hashes.SHA256()
)

# Set the signature in the headers
headers['x-signature'] = base64.urlsafe_b64encode(signature).decode('utf-8')
```
</TabItem>

</Tabs>

### Currency denomination

To denominate accepted payments in a currency, such as USD, EUR, etc., use the `amount` attribute. The integration will then calculate and apply the amounts for each specified accepted token.

```json
{
  "amount": {
    "currency": "USD",
    "fix": 100
  },
  "accept": [
    {
      "blockchain": "ethereum",
      "token": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "receiver": "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"
    },
    {
      "blockchain": "ethereum",
      "token": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      "receiver": "0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"
    }
  ]
}
```

This configuration will accept USD$100 worth of USDT or Ether (Ethereum's native token), send to `0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02`.

:::info

`0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE` represents the native token of the respective chain. e.g. Ether on Ethereum, BNB on BSC, Matic on Polygon etc.

:::

### Passthrough payload

If your dynamic configuration depends on data initially provided to the widget (on the frontend) and this data needs to be relayed to your backend for determining the dynamic configuration, pass your payload to the widget during initialization:

```javascript
DePayWidgets.Payment({
  integration: 'YOUR-INTEGRATION-ID',
  payload: {
    items: [
      { id: 1, amount: 2 },
      { id: 2, amount: 1 }
    ]
  }
})
```

By doing so, the payload will be included when calling your configured endpoint. The request body directed towards your configured endpoint will now encompass:

```json
{
  "items": [
    {
      "id": 1,
      "amount": 2
    },{
      "id": 2,
      "amount": 1
    }
  ]
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
In contrast, payments valued at USD $1,000 or above receive the "finalized" status, which necessitates varying block confirmations depending on the specific blockchain in use.

For an in-depth overview, explore the [extended validation section](/docs/payments/validation#extended-validation).
