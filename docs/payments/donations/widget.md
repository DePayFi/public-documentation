---
sidebar_position: 3
sidebar_label: Widget
---

# Web3 Donation Widget

Self-host and controll the entire donation flow within your app.

## Example

<div className="widget-example pt-5" style={{ height: "345px" }}>
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
                        <h1 className="FontSizeL TextLeft">Donation</h1>
                      </div>
                    </div>
                    <div className="DialogHeaderActionRight PaddingTopS PaddingLeftS PaddingRightS">
                      <button className="ButtonCircular" title="Close dialog">
                        <svg className="CloseIcon Icon" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <line x1="18" x2="6" y1="6" y2="18"></line>
                          <line x1="6" x2="18" y1="6" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="DialogBody">
                    <div className="PaddingTopS PaddingLeftM PaddingRightM PaddingBottomXS">
                      <div className="Card" title="Change amount">
                        <div className="CardBody">
                          <div className="CardBodyWrapper">
                            <h4 className="CardTitle">Amount</h4>
                            <h2 className="CardText">
                              <div className="TokenAmountRow">
                                <span className="TokenAmountCell">$10.00</span>
                              </div>
                            </h2>
                          </div>
                        </div>
                        <div className="CardAction">
                          <svg className="ChevronRight Icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill-rule="evenodd" stroke-width="1"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="Card" title="Change payment">
                        <div className="CardImage" title="Ether">
                          <img src="data:image/png;base64,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"/>
                        </div>
                        <div className="CardBody">
                          <div className="CardBodyWrapper">
                            <h4 className="CardTitle">Payment</h4>
                            <h2 className="CardText">
                              <div className="TokenAmountRow">
                                <span className="TokenSymbolCell">ETH</span>
                                <span className="TokenAmountCell">0.0024</span>
                              </div>
                            </h2>
                          </div>
                        </div>
                        <div className="CardAction">
                          <svg className="ChevronRight Icon" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill-rule="evenodd" stroke-width="1"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="DialogFooter">
                    <div className="PaddingTopXS PaddingRightM PaddingLeftM PaddingBottomM">
                      <div>
                        <button className="ButtonPrimary">Pay $10.00</button>
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
    configuration={ {"title": "Donation", "accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
</div>

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

Make sure you select the "**Donation Widget**" integration.

Give your integration a name so that you can identify it later on.

## Accepted tokens/blockchains

Choose the tokens you wish to accept as donation methods. Ensure you provide a receiving wallet address for every selected token.

## Place integration code

Now you can place the integration code into your app and open the DePay Donation widget:

```javascript
DePayWidgets.Payment({
  integration: 'YOUR-INTEGRATION-ID'
});
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
  data: req.body,
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

To pass a dynamic configuration to the widget, such as for conveying dynamic prices or for initiating dynamic redirects after successful donations, you'll need to activate dynamic configurations for the specified integration.

After activation, your dynamic configuration - supplied via an API endpoint from your system - must return a valid widget configuration. This configuration should, at a minimum, detail the accepted donations, including blockchains, tokens, amount, and receiver.

### Set endpoint

First, you must specify an HTTPS URL endpoint that the integration will call each time someone attempts to make a donation.

:::caution

Endpoints need to respond a dynamic configuration under **2 seconds** or requests will be dropped otherwise and the widget will not load.

:::

### Sign responses

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

Ensuring you adhere to the highest security standards when working with private keys. Never share or publicly disclose the private key.

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

Incoming requests will have the following headers:

```
Accept: application/json,application/vnd.api+json
Accept-Charset: utf-8
Content-Type: application/json; charset=utf-8
X-Signature: 0Lt-bOwigLB_tPzWev5Iwe1YeWFWQ1fTi31wolfisWXuSKfuj53MujGfxkDli_A3R4IgFpgfEF6KmU1tDqYn2bId2HiFG6MYf5v25bhLscJnwAlGyVYMVmnxYyuPYsHMTZvZx61LSxC52TavRw4LN5wq9ux4nw4B30rnqCAaYKAZcUgpKgUwsMRToY0D8AwwW2mkkFk5rJKdx0LAnhz0dpGx5b5lc1v7UbcdzvteU8PBzyXcT2hQ-lMo8dTcdFM6tr_xJRrlxEOzeAKB3b2EfOKS_H9AtzICXT-NGc-HvgWKI56NURAheJweKdAvV7AF5atWTjSLnTFAHFl4NkLFsg==
```

Ensure you verify the incoming `x-signature` header to confirm the request's authenticity. [How to verify communication](#verify-communication).

### Basic response

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

### Passthrough payload

If your dynamic configuration depends on data initially provided to the widget (on the frontend) and this data needs to be relayed to your backend for determining the dynamic configuration, pass your payload to the widget during initialization:

```javascript
DePayWidgets.Payment({
  integration: 'YOUR-INTEGRATION-ID',
  payload: {
    user: '12345'
  }
})
```

By doing so, the payload will be included when calling your configured endpoint. The request body directed towards your configured endpoint will now encompass:

```json
{
  "user": "12345"
}
```

## Finality

DePay employs two distinct confirmation levels for payment validation based on the transaction value and the underlying blockchain's characteristics.
Payments below USD $1,000 are designated as "confirmed" after a single block confirmation.
In contrast, payments valued at USD $1,000 or above receive the "finalized" status, which necessitates varying block confirmations depending on the specific blockchain in use:

For an in-depth overview, explore the [extended validation section](/docs/payments/validation#extended-validation).
