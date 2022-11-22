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
    faSquareCheck,
    faRobot,
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
  faSquareCheck,
  faRobot,
].forEach((icon)=>library.add(icon))

if (ExecutionEnvironment.canUseDOM) {
  const DePayButtons = require('@depay/buttons');
}

function DePayButton(props){

  return(
    <BrowserOnly>
      <DePayButtons.DePayButton
        label={ props.label }
        widget={ props.widget }
        configuration={ props.configuration }
        css={ props.css }
      />
    </BrowserOnly>
  )
}

export default {
  ...MDXComponents,
  DePayButton,
  FontAwesomeIcon,
}
