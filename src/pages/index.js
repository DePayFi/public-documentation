import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faWallet, faRotate, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  const {siteConfig} = useDocusaurusContext()

  return (
    <Layout description={siteConfig.tagline}>
      
      <header className={'hero hero--primary'}>
        
        <div className="container pt-4">
          
          <h1 className="hero__title">Documentation</h1>
          <p className="hero__subtitle">Learn how to integrate DePay by example.</p>

        </div>
      </header>

      <main>

        <div className="container pb-5">

          <div className="row pb-5">
            
            <div className="col-12 col-md-6 pe-0 pe-md-4">
              <h2 className="h3 pt-0">Web3 Payments</h2>
              <p className="lead">Offer seamless, blockchain-powered payment experiences to your users.</p>
              <div className="pt-2">
                <a className="button btn btn-lg btn-primary mt-1" href="/docs/payments/">
                  Get started
                  <FontAwesomeIcon icon={ faArrowRightLong } className="ms-2" />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 pt-5 pt-md-0">
              <img className="frontpage-web3-payments-image" src="/docs/img/web3-payments.svg"/>
            </div>
          </div>

          <div className="pt-5 pb-4 px-2 px-md-0">
            <h3 className="h4 pt-5 pt-md-0">Benefits</h3>
            <div className="row pt-1">
              
              <div className="col-12 ps-0 pe-0 col-md-4 pe-md-4">
                <a href="/docs/payments/benefits#direct-wallet-payments" className="d-block hover-card p-3">
                  <span className="d-block"><FontAwesomeIcon icon={ faWallet } className="text-body-color h2 pt-2" /></span>
                  <h4 className="d-block h5 mb-1">Direct wallet payments</h4>
                  <p className="d-block text-light pt-1 mb-0">Receive payments directly and without any intermediaries.</p>
                </a>
              </div>

              <div className="col-12 ps-0 pe-0 col-md-4 pe-md-4">
                <a href="/docs/payments/benefits#auto-conversion" className="d-block hover-card p-3">
                  <span className="d-block"><FontAwesomeIcon icon={ faRotate } className="text-body-color h2 pt-2" /></span>
                  <h4 className="d-block h5 mb-1">Auto-conversion</h4>
                  <p className="d-block text-light pt-1 mb-0">DePay uses decentralized finance to convert payments on-the-fly.</p>
                </a>
              </div>

              <div className="col-12 ps-0 pe-0 col-md-4 pe-md-4">
                <a href="/docs/payments/benefits#one-click-payments" className="d-block hover-card p-3">
                  <span className="d-block"><FontAwesomeIcon icon={ faWandMagicSparkles } className="text-body-color h2 pt-2" /></span>
                  <h4 className="d-block h5 mb-1">"One-click" Payments</h4>
                  <p className="d-block text-light pt-1 mb-0">DePay automagically suggests the most cost-efficient payment to users.</p>
                </a>
              </div>
            </div>
          </div>

          <div className="row pt-5 pb-5">

            <div className="col-12 col-md-6">
            
              <h3 className="h4 pt-3 pb-3">Products</h3>
              
              <div className="pb-1">
                <a href="/docs/payments/" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/docs/img/products/DePay-Payments.png"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Payments</strong></div>
                    <div className="text-light">One-off payments</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/donations/" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/docs/img/products/DePay-Donations.png"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Donations</strong></div>
                    <div className="text-light">One-off donations</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/integrate/link" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/docs/img/products/DePay-Links.png"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Links</strong></div>
                    <div className="text-light">No-code payments</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6">
            
              <h3 className="h4 pt-3 pb-3">Plugins</h3>
              
              <div className="pb-1">
                <a href="/docs/payments/plugins/shopify" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/docs/img/plugins/Shopify.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Shopify</strong></div>
                    <div className="text-light">E-commerce</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/plugins/woocommerce" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/docs/img/plugins/WooCommerce.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>WooCommerce</strong></div>
                    <div className="text-light">E-commerce</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/plugins/wordpress" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/docs/img/plugins/Wordpress.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Wordpress</strong></div>
                    <div className="text-light">Websites, Blogs & CMS</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row pt-4 pb-5">

            <div className="col-12 col-md-4">
            
              <h3 className="h4 pt-3 pb-3">Tokens</h3>
              
              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/USDC.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>USDC</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/USDT.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>USDT</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/DAI.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>DAI</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/ETH.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>ETH</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/BNB.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>BNB</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/MATIC.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>MATIC</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/SOL.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>SOL</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/AVA.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>AVA</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/XDAI.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>XDAI</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/FTM.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>FTM</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/SHIB.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>SHIB</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/BONK.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>BONK</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/SAMO.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>SAMO</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/DOGE.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>DOGE</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/FRAX.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>FRAX</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/OP.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>OP</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/WLD.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>WLD</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/ARB.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>ARB</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/AAVE.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>AAVE</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/CRV.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>CRV</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/GNO.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>GNO</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/UNI.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>UNI</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/tokens/APE.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>APE</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <div className="ps-0">
                    <div className="text-light">10'000+ accepted tokens<br/><strong>via Auto-conversion</strong></div>
                    <div className="pt-3">
                      <a href="/docs/payments/supported/tokens" className="text-decoration-none">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
            
              <h3 className="h4 pt-3 pb-3">Wallets</h3>
              
              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/MetaMask.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>MetaMask</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/Coinbase.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Coinbase Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/Binance.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Binance Defi Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/Uniswap.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Uniswap Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/Phantom.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Phantom</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/Backpack.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Backpack</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/Solflare.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Solflare</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/TrustWallet.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Trust Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/CryptoCom.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>crypto.com DeFi Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/1inch.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>1inch Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/imToken.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>imToken Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/Ledger.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Ledger Live</strong></div>
                  </div>
                </div>

                <div className="pb-1 pt-1">
                  <div className="d-flex p-2 text-decoration-none">
                    <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/wallets/WalletConnect.svg"/>
                    <div className="ps-3">
                      <div className="text-light">100+ additional wallets via <strong>WalletConnect</strong></div>
                    </div>
                  </div>
                  <div className="d-flex p-2 text-decoration-none">
                    <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Ethereum.svg"/>
                    <div className="ps-3">
                      <div className="text-light">100+ additional wallets via <br/><strong>Ethereum Extension Standard</strong></div>
                    </div>
                  </div>
                  <div className="d-flex p-2 text-decoration-none">
                    <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Solana.svg"/>
                    <div className="ps-3">
                      <div className="text-light">10+ additional wallets via <br/><strong>Solana Extension Standard</strong></div>
                    </div>
                  </div>
                  <div className="d-flex p-2 text-decoration-none">
                    <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Solana.svg"/>
                    <div className="ps-3">
                      <div className="text-light">10+ additional wallets via <br/><strong>Solana Mobile Wallet Adapter</strong></div>
                    </div>
                  </div>
                  <div className="d-flex p-2 text-decoration-none">
                    <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Solana.svg"/>
                    <div className="ps-3">
                      <div className="text-light">2+ additional wallets via <br/><strong>Solana Pay</strong></div>
                    </div>
                  </div>
                  <div className="d-flex p-2 text-decoration-none">
                    <span style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }}/>
                    <div className="ps-3">
                      <a href="/docs/payments/supported/wallets" className="text-decoration-none">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
            
              <h3 className="h4 pt-3 pb-3">Blockchains</h3>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Base.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Base</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Optimism.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Optimism</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Arbitrum.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Arbitrum</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Avalanche.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Avalanche</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Fantom.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Fantom</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Gnosis.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Gnosis</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Solana.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Solana</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Polygon.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Polygon</strong> (POS)</div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/BSC.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>BNB Smart Chain</strong></div>
                  </div>
                </div>
              </div>
              
              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/docs/img/blockchains/Ethereum.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Ethereum</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <div className="ps-0">
                    <div className="text-light">DePay adds new blockchains continuously</div>
                    <div className="pt-3">
                      <a href="/docs/payments/supported/blockchains" className="text-decoration-none">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  )
}
