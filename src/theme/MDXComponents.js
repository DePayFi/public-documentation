import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import MDXComponents from '@theme-original/MDXComponents'
import React from 'react'
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

export default {
  ...MDXComponents,
  DePayButton,
  FontAwesomeIcon,
}
