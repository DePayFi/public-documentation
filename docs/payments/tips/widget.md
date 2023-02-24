---
sidebar_position: 3
sidebar_label: Widget
---

# Web3 Tip Widget

Self-host and controll the entire tip flow within your app.

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
                        <h1 className="FontSizeL TextLeft">Tip</h1>
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
  <DePayButton
    label={'Click to test'}
    widget={'Donation'}
    configuration={ {"title": "Tip", "accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
</div>

## Installation

### Package

You can install DePay Widgets via `yarn` or `npm` and build it as part of your application:

```
yarn add @depay/widgets
```

or if you use npm

```
npm install @depay/widgets --save
```

### CDN

If you don't want to install the package or don't want to build DePay Widgets as part of your application, you can also load DePay Widgets via our CDN:

```html
<script defer async src="https://integrate.depay.com/widgets/v10.js"></script>
```

## Usage

After installation, import `DePayWidgets` from `@depay/widgets` wherever you need it:

```javascript
import DePayWidgets from '@depay/widgets';
```

## Configuration

You need to pass a configuration object to `DePayWidgets.Donation` which needs to at least contain the `accept` field.

```javascript
DePayWidgets.Donation({

  title: "Tip",

  accept: [{
    blockchain: 'ethereum',
    token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
    receiver: '0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02'
  }]
});
```

This declares to receive DEPAY tokens (`0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb`) as tip on `ethereum` to `0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02`.

You can also accept multiple tokens on multiple blockchains:

```javascript
DePayWidgets.Donation({

  title: "Tip",

  accept: [
    {
      blockchain: 'ethereum',
      token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      receiver: '0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02'
    },{
      blockchain: 'bsc',
      token: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      receiver: '0x552C2a5a774CcaEeC036d41c983808E3c76477e6'
    }
  ]
});
```

The [DePay App](https://app.depay.com) helps you to create a basic valid configuration: **[DePay App](https://app.depay.com)** > **Integrations** > **New Integration** > **Donation Widget**

### accept

The `accept` attribute describes what is accepted as a tip. It needs to be an array and needs to contain at least one entry.

#### Required Attributes

`blockchain` - The name of the blockchain (e.g. `ethereum`, `bsc`, `polygon` etc.)

`token` - The address of the token you want to receive

`receiver` - The address receiving the tip. Always double check that you've set the right address.

#### amount

When you want to control how the amount selection behaves, pass the `amount` configuration object,
alongside values for `start`, `min` and `step`.

`start`: The amount that is initially selected.

`min`: The minimum amount selectable.

`step`: The number by wich to increment/decremten changes to the amount.

```javascript
{
  amount: {
    'start': 10,
    'min': 1,
    'step': 1
  }
}
```

### connected

A callback that will be executed once the user connects a wallet.

This function will be called with the connected wallet address as the main argument:

```javascript
connected: (address)=> {
  // do something with the address
}
```

#### closed

`closed`

A function that will be called once the user closes the widget (no matter if before or after the tip).

```javascript
closed: ()=> {
  // do something if user closed the widget
}

```

### before

`before`

A function that will be called before the tip is handed over to the wallet.

Allows you to stop the tip if this methods returns false.

```javascript
before: (tip)=> {
  alert('Something went wrong')
  return false // stop
}
```

### sent

`sent`

A function that will be called once the tip has been sent to the network (but still needs to be mined/confirmed).

The widget will call this function with a transaction as single argument (see: [depay-web3-wallets](https://github.com/depayfi/depay-web3-wallets#transaction) for more details about the structure)

```javascript
sent: (transaction)=> {
  // called when tip transaction has been sent to the network
}
```

### succeeded

`succeeded`

A function that will be called once the tip has succeeded on the network (checked client-side).

The widget will call this function passing a transaction as single argument (see: [depay-web3-wallets](https://github.com/depayfi/depay-web3-wallets#transaction) for more details)

```javascript
succeeded: (transaction)=> {
  // called when tip transaction has been confirmed once by the network
}
```

### failed

`failed`

A function that will be called if the tip execution failed on the blockchain (after it has been sent/submitted).

The widget will call this function passing a transaction as single argument (see: [depay-web3-wallets](https://github.com/depayfi/depay-web3-wallets#transaction) for more details)

```javascript
failed: (transaction)=> {
  // called when tip transaction failed on the blockchain
  // handled by the widget, no need to display anything
}
```

### critical

`critical`

A function that will be called if the widget throws an critical internal error that it can't handle and display on it's own:

```javascript
critical: (error)=> {
  // render and display the error with error.toString()
}
```

### error

`error`

A function that will be called if the widget throws an non-critical internal error that it can and will handle and display on it's own:

```javascript
error: (error)=> {
  // maybe do some internal tracking with error.toString()
  // no need to display anything as widget takes care of displaying the error
}
```

### currency

Allows you to enforce displayed local currency (instead of automatically detecting it):

```javascript
{
  currency: 'USD'
}
```

### whitelist

Allows only the configured tokens to be eligible as means of tip (from the sender):

```javacript
whitelist: {
  ethereum: [
    '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // ETH
    '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
    '0x6b175474e89094c44da98b954eedeac495271d0f'  // DAI
  ],
  bsc: [
    '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // BNB
    '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    '0x55d398326f99059ff775485246999027b3197955'  // BSC-USD
  ],
  polygon: [
    '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // MATIC
    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
  ]
}
```

### blacklist

Allows to blacklist tokens so that they will not be suggested as means of tip (from the sender):

```javacript
blacklist: {
  ethereum: [
    '0x82dfDB2ec1aa6003Ed4aCBa663403D7c2127Ff67',  // akSwap
    '0x1368452Bfb5Cd127971C8DE22C58fBE89D35A6BF',  // JNTR/e
    '0xC12D1c73eE7DC3615BA4e37E4ABFdbDDFA38907E',  // KICK
  ],
  bsc: [
    '0x119e2ad8f0c85c6f61afdf0df69693028cdc10be', // Zepe
    '0xb0557906c617f0048a700758606f64b33d0c41a6', // Zepe
    '0x5190b01965b6e3d786706fd4a999978626c19880', // TheEver
    '0x68d1569d1a6968f194b4d93f8d0b416c123a599f', // AABek
    '0xa2295477a3433f1d06ba349cde9f89a8b24e7f8d', // AAX
    '0xbc6675de91e3da8eac51293ecb87c359019621cf', // AIR
    '0x5558447b06867ffebd87dd63426d61c868c45904', // BNBW
    '0x569b2cf0b745ef7fad04e8ae226251814b3395f9', // BSCTOKEN
    '0x373233a38ae21cf0c4f9de11570e7d5aa6824a1e', // ALPACA
    '0x7269163f2b060fb90101f58cf724737a2759f0bb', // PUPDOGE
    '0xb16600c510b0f323dee2cb212924d90e58864421', // FLUX
    '0x2df0b14ee90671021b016dab59f2300fb08681fa', // SAFEMOON.is
    '0xd22202d23fe7de9e3dbe11a2a88f42f4cb9507cf', // MNEB
    '0xfc646d0b564bf191b3d3adf2b620a792e485e6da', // PIZA
    '0xa58950f05fea2277d2608748412bf9f802ea4901', // WSG
    '0x12e34cdf6a031a10fe241864c32fb03a4fdad739' // FREE
  ]
}
```

### event

If set to `ifSwapped`, emits an [event](https://github.com/depayfi/depay-evm-router#depayrouterv1paymentevent02) if payments are routed through [router smart contract](https://github.com/depayfi/depay-evm-router).
Payments are routed through the DePayPaymentRouter if swapping tokens is required in order to perform the payment. If payments are not routed through the router, e.g. direct transfer, no event is emited if `event` is set to `ifSwapped`.

```javascript
{
  event: 'ifSwapped'
}
```

### container

Allows you to pass a container element that is supposed to contain the widget:

```javascript
{
  container: document.getElementById('my-container')
}
```

Make sure to set the css value `position: relative;` for the container element. Otherwise it can not contain the widget.

React example:

```javascript
let CustomComponentWithWidget = (props)=>{
  let container = useRef()

  useEffect(()=>{
    if(container.current) {
      DePayWidgets.Donation({ ...defaultArguments, document,
        container: container.current
      })
    }
  }, [container])

  return(
    <div ref={container} style={{ position: 'relative', border: '1px solid black', width: "600px", height: "600px" }}></div>
  )
}
```

### style

Allows you to change the style of the widget.

```javascript
{
  style: {
    colors: {
      primary: '#ffd265',
      text: '#e1b64a',
      buttonText: '#000000',
      icons: '#ffd265'
    },
    fontFamily: '"Cardo", serif !important',
    css: `
      @import url("https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap");

      .ReactDialogBackground {
        background: rgba(0,0,0,0.8);
      }
    `
  }
}
```

### fee

You can configure a fee which will be applied to every tip with it's own dedicated fee receiver address.

The fee will be taken from the target token and target amount (after swap, depending on your `accept` configuration).

`amount`: Either percentage (e.g. `5%`, or absolute amount as BigNumber string ('100000000000000000') or pure number (2.5)

`receiver`: The address that is supposed to receive the fee.

```javascript
{
  fee: {
    amount: '3%',
    receiver: '0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02'
  }
}
```

## Unmount

Allows you to unmount (the React safe way) the entire widget from the outside:

```javascript
let { unmount } = await DePayWidgets.Donation({})

unmount()
```

