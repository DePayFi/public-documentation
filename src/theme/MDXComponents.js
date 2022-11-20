import React from 'react'
import MDXComponents from '@theme-original/MDXComponents'
import DePayButtons from '@depay/buttons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCoins, faWallet, faCube, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'

[
  faYoutube,
  faCoins,
  faWallet,
  faCube,
  faMoneyBillTransfer,
].forEach((icon)=>library.add(icon))

export default {
  ...MDXComponents,
  DePayButton: DePayButtons.DePayButton,
  FontAwesomeIcon,
}
