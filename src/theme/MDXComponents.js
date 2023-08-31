import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import MDXComponents from '@theme-original/MDXComponents'
import React from 'react'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'
import DePayWidgets from '@depay/widgets'
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

export default {
  ...MDXComponents,
  DePayButton,
  DePayWidgetTest,
  FontAwesomeIcon,
  Tabs,
  TabItem,
}
