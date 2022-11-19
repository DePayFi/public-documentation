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
              <div className="pt-2 pb-3">
                <span className="badge text-bg-secondary me-2">Decentralized</span>
                <span className="badge text-bg-secondary me-2">Peer-to-peer</span>
                <span className="badge text-bg-secondary me-2">Auto-conversion</span>
              </div>
              <p className="lead">Offer seamless blockchain-powered payment experiences to your users.</p>
              <div className="pt-2">
                <a className="button btn btn-primary mt-1" href="/docs/payments/">
                  Get started
                  <FontAwesomeIcon icon={ faArrowRightLong } className="ms-2" />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 pt-5 pt-md-0">
              <img className="frontpage-web3-payments-image" src="/img/web3-payments.svg"/>
            </div>
          </div>

          <div className="pt-5 pb-4 px-2 px-md-0">
            <h3 className="h4 pt-5 pt-md-0">Benefits</h3>
            <div className="row pt-1">
              
              <div className="col-12 ps-0 pe-0 col-md-4 pe-md-4">
                <a href="/docs/payments/benefits#direct-wallet-payments" className="d-block hover-card p-3">
                  <span className="d-block"><FontAwesomeIcon icon={ faWallet } className="text-secondary h2 pt-2" /></span>
                  <h4 className="d-block h5 text-primary mb-1">Direct wallet payments</h4>
                  <p className="d-block text-light pt-1 mb-0">Receive payments directly and without any intermediaries.</p>
                </a>
              </div>

              <div className="col-12 ps-0 pe-0 col-md-4 pe-md-4">
                <a href="/docs/payments/benefits#auto-conversion" className="d-block hover-card p-3">
                  <span className="d-block"><FontAwesomeIcon icon={ faRotate } className="text-secondary h2 pt-2" /></span>
                  <h4 className="d-block h5 text-primary mb-1">Auto-conversion</h4>
                  <p className="d-block text-light pt-1 mb-0">DePay uses decentralized finance to convert payments on-the-fly.</p>
                </a>
              </div>

              <div className="col-12 ps-0 pe-0 col-md-4 pe-md-4">
                <a href="/docs/payments/benefits#one-click-payments" className="d-block hover-card p-3">
                  <span className="d-block"><FontAwesomeIcon icon={ faWandMagicSparkles } className="text-secondary h2 pt-2" /></span>
                  <h4 className="d-block h5 text-primary mb-1">"One-click" Payments</h4>
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
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/img/products/DePay-Payments.png"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Payments</strong></div>
                    <div className="text-light">One-off payments</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/donations/" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/img/products/DePay-Donations.png"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Donations</strong></div>
                    <div className="text-light">One-off donations</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/implementations/link" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/img/products/DePay-Links.png"/>
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
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/img/plugins/Shopify.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Shopify</strong></div>
                    <div className="text-light">E-commerce</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/plugins/woocommerce" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/img/plugins/WooCommerce.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>WooCommerce</strong></div>
                    <div className="text-light">E-commerce</div>
                  </div>
                </a>
              </div>

              <div className="pb-1">
                <a href="/docs/payments/plugins/wordpress" className="d-flex hover-card p-3">
                  <img style={{ width: '2.4rem', height: '2.4rem', position: 'relative', top: '0.2rem' }} src="/img/plugins/Wordpress.svg"/>
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
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/USDC.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>USDC</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/BUSD.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>BUSD</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/USDT.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>USDT</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/DAI.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>DAI</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/ETH.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>ETH</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/BNB.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>BNB</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/MATIC.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>MATIC</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/SHIB.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>SHIB</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/DOGE.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>DOGE</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/FRAX.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>FRAX</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/tokens/APE.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>APE</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <div className="ps-0">
                    <div className="text-light">8'000+ accepted tokens</div>
                    <div className="pt-3">
                      <a href="/docs/payments/supported/blockchains" className="text-decoration-none">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
            
              <h3 className="h4 pt-3 pb-3">Wallets</h3>
              
              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/MetaMask.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>MetaMask</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/Coinbase.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Coinbase Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/TrustWallet.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Trust Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/CryptoCom.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>crypto.com DeFi Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/1inch.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>1inch Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/imToken.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>imToken Wallet</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/Ledger.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Ledger Live</strong></div>
                  </div>
                </div>

                <div className="pb-1 pt-1">
                  <div className="d-flex p-2 text-decoration-none">
                    <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/wallets/WalletConnect.svg"/>
                    <div className="ps-3">
                      <div className="text-light">100+ additional wallets via <strong>WalletConnect</strong></div>
                      <div className="pt-3">
                        <a href="/docs/payments/supported/wallets" className="text-decoration-none">Learn more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
            
              <h3 className="h4 pt-3 pb-3">Blockchains</h3>
              
              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/blockchains/Ethereum.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Ethereum</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/blockchains/BSC.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>BNB Smart Chain</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <img style={{ width: '1rem', height: '1rem', position: 'relative', top: '0.2rem' }} src="/img/blockchains/Polygon.svg"/>
                  <div className="ps-3">
                    <div className="text-light"><strong>Polygon</strong></div>
                  </div>
                </div>
              </div>

              <div className="pb-1 pt-1">
                <div className="d-flex p-2 text-decoration-none">
                  <div className="ps-0">
                    <div className="text-light">10+ additional blockchains <strong>coming soon</strong></div>
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
