import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import MDXComponents from '@theme-original/MDXComponents'
import React, { useState, useEffect } from 'react'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'
import DePayWidgets from '@depay/widgets'
import { decodePayment, PROTOCOL_ADDRESSES } from '@depay/verify-payment'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCoins,
    faWallet,
    faCube,
    faMoneyBillTransfer,
    faArrowRightLong,
    faRotate,
    faWandMagicSparkles,
    faFlag,
    faCompass,
    faSquareCheck,
    faRobot,
    faKey,
    faRoute,
    faSatelliteDish,
  } from '@fortawesome/free-solid-svg-icons'

[
  faYoutube,
  faCoins,
  faWallet,
  faCube,
  faMoneyBillTransfer,
  faArrowRightLong,
  faRotate,
  faWandMagicSparkles,
  faFlag,
  faCompass,
  faSquareCheck,
  faRobot,
  faKey,
  faRoute,
  faSatelliteDish,
].forEach((icon)=>library.add(icon))

let DePayButtons
if (ExecutionEnvironment.canUseDOM) {
  DePayButtons = require('@depay/buttons').default;
}

function DePayButton(props){

  return(
    <BrowserOnly>
      {() =>
        <DePayButtons.DePayButton
          label={ props.label }
          widget={ props.widget }
          configuration={ props.configuration }
          css={ props.css }
        />
      }
    </BrowserOnly>
  )
}

function DePayWidgetTest(props){
  return(
    <div className={props.className}>
      <button
        type='button'
        className="btn btn-link fw-bold"
        onClick={(event)=>{
          event.preventDefault()
          DePayWidgets.Payment(props.configuration)
        }}
      >{ props.label || "Click to test" }</button>
    </div>
  )
}

function PaymentDecoder() {

  const [ address, setAddress ] = useState('')
  const [ callData, setCallData ] = useState('')
  const [ decodedPayment, setDecodedPayment ] = useState(null)

  useEffect(()=>{
    if(address && callData) {
      const blockchain = Object.keys(PROTOCOL_ADDRESSES).find(key => PROTOCOL_ADDRESSES[key] === address);
      const _decodedPayment = decodePayment({ blockchain, address, transaction: callData });
      if(_decodedPayment) {
        setDecodedPayment(_decodedPayment)
      } else {
        setDecodedPayment(false)
      }
    } else {
      setDecodedPayment(null)
    }

  }, [address, callData])  

  return(
    <div className="card p-4">
      <div className="mb-3">
        <label htmlFor="contractAddress" className="form-label">Contract address</label>
        <input value={address} onChange={(event)=>setAddress(event.target.value)} type="email" className="form-control" id="contractAddress" aria-describedby="contractAddressHelp"/>
        <div id="contractAddressHelp" className="form-text">Enter the address of the contract you are interacting with</div>
      </div>
      <div className="mb-3 pt-2">
        <label htmlFor="callData" className="form-label">Call data</label>
        <textarea
          value={callData} onChange={(event)=>setCallData(event.target.value)}
          className="form-control" id="callData"
          rows={4}
          style={{ resize: 'none' }}
        />
        <div id="contractAddressHelp" className="form-text">Paste/enter the call data to be executed</div>
      </div>
      <pre className="p-3 bg-dark text-white card mt-2 mb-0">
        { decodedPayment === null &&
          <>Please enter contract address and call data.</>
        }
        { decodedPayment === false &&
          <strong>Invalid calldata or contract address!</strong>
        }
        { decodedPayment &&
          <strong>
            Payment<br/>
            Amount: { decodedPayment.amount.toString() }<br/>
            Token: { decodedPayment.token.toString() }<br/>
            Receiver: { decodedPayment.receiver.toString() }<br/>
          </strong>
        }
      </pre>
    </div>
  )
}

export default {
  ...MDXComponents,
  DePayButton,
  DePayWidgetTest,
  FontAwesomeIcon,
  Tabs,
  TabItem,
  PaymentDecoder,
}
