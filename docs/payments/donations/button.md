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
    widget={'Donation'}
    configuration={ {"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
</div>

```html
<div
  class="DePayButton" 
  label="Donate"
  widget="Donation"
  configuration='{"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
/>
<script src="https://integrate.depay.com/buttons/v10.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

## Attributes

In order to customize the Web3 Payment Button you just need to change the `div` container's attributes. 

### label

Change the `label` attribute of the `div` container in order to change the button label:

```html
<div
  class="DePayButton" 
  label="Donate NOW"
  widget="Donation"
  configuration='{"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
/>
<script src="https://integrate.depay.com/buttons/v10.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

<div className="py-5">
  <DePayButton
    label={'Donate NOW'}
    widget={'Donation'}
    configuration={ {"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
</div>

### widget

Change the `widget` attribute if you want to open another widget type upon click. e.g. `Payment`, `Donation` etc.

```html
<div
  class="DePayButton" 
  label="Donate"
  widget="Donation"
  configuration='{"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
/>
<script src="https://integrate.depay.com/buttons/v10.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

<div className="py-5">
  <DePayButton
    label={'Donate'}
    widget={'Donation'}
    configuration={ {"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
</div>

### configuration

Change the `configuration` attribute if you want to pass a different configuration to the widget.

[Learn more about the widget configuration](/docs/payments/donations/widget#configuration)

Or use the DePay App to generate a valid configuration: Go to **[DePay App](https://app.depay.com)** > **Integrations** > **New Integration** > **Donation Button**.

### css

You can also change the design of the button by setting a `css` attribute:

```html
<div
  class="DePayButton" 
  label="Donate"
  widget="Donation"
  configuration='{"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]}'
  css="button { background: blue; border-radius: 0.2rem; }"
/>
<script src="https://integrate.depay.com/buttons/v10.js"></script>
<noscript><a href="https://depay.com">Web3 Payments</a> are only supported with JavaScript enabled.</noscript>
<script>DePayButtons.init({ document });</script>
```

<div className="py-5">
  <DePayButton
    label={'Donate'}
    widget={'Donation'}
    configuration={ {"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"},{"blockchain":"bsc","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
    css={'button { background: blue; border-radius: 0.2rem; }'}
  />
</div>


## React

You can also render the button directly with React if your project uses React:

```javascript
import DePayButtons from '@depay/buttons'

return(
  <DePayButtons.DePayButton
    label={'Donate'}
    widget={'Donation'}
    configuration={ {"accept":[{"blockchain":"ethereum","token":"0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb","receiver":"0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02"}]} }
  />
)
```

Make sure you [install the `@depay/buttons` package](https://www.npmjs.com/package/@depay/buttons) before you import it.
