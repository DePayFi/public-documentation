import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { useState } from 'react'
import { faHeadset, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactDialog } from '@depay/react-dialog'
import { useThemeConfig } from '@docusaurus/theme-common'

function Footer() {

  const [ showSupportDialog, setShowSupportDialog ] = useState(false)

  const close = ()=>{ setShowSupportDialog(false) }

  return (
    <footer className='footer'>
      
      <BrowserOnly>
        {() =>
          <ReactDialog close={ close } open={ showSupportDialog }>
            <div className="ReactDialogAnimation">
              
              <div className="Dialog p-3">
                <div>
                  <div>
                    <h2>We can support you</h2>
                  </div>

                  <div className="position-absolute top-0 end-0 p-3">
                    <div className="pt-1">
                      <button onClick={close} style={{ height: '32px', width: '32px' }} className="btn btn btn-dialog rounded-circle" title="Close dialog">
                        <svg height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <line x1="18" x2="6" y1="6" y2="18"></line>
                          <line x1="6" x2="18" y1="6" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-2 px-1">
                  <a className="btn d-block text-decoration-none mb-2 py-2 btn-secondary text-start px-2" href="https://t.me/depayfi" target="_blank" rel="noopener noreferrer">
                    <span className="text-center d-inline-block" style={{width: "2.8rem"}}><FontAwesomeIcon icon={ faTelegram } /></span>
                    Telegram
                  </a>
                  <a className="btn d-block text-decoration-none mb-2 py-2 btn-secondary text-start px-2" href="https://discord.gg/smDs5zK" target="_blank" rel="noopener noreferrer">
                    <span className="text-center d-inline-block" style={{width: "2.8rem"}}><FontAwesomeIcon icon={ faDiscord } /></span>
                    Discord
                  </a>
                  <a className="btn d-block text-decoration-none mb-1 py-2 btn-secondary text-start px-2" href="mailto:support@depay.com?subject=Support Request via Documentation">
                    <span className="text-center d-inline-block" style={{width: "2.8rem"}}><FontAwesomeIcon icon={ faEnvelope } /></span>
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          </ReactDialog>
        }
      </BrowserOnly>

      <div className="container">
        
        <div className="pb-1">
          <small>
            <FontAwesomeIcon icon={ faHeadset } className="me-2" />
            <span>Struggling? </span>
            <a href="#" onClick={(event)=>{
              event.preventDefault()
              setShowSupportDialog(true)
              return false
            }} className='text-decoration-none'>Contact us.</a>
          </small>
        </div>

        <div className="pt-2 pb-1">
          <small>
            <FontAwesomeIcon icon={ faGithub } className="me-2" />
            <span>Want to deep dive? </span>
            <a href="https://github.com/depayfi" target="_blank" rel="noopener nofollow" title="DePay on Github" className='text-decoration-none'>Check Github.</a>
          </small>
        </div>

        <div className="pt-2 pb-1">
          <small>
            <FontAwesomeIcon icon={ faHouse } className="me-2" />
            <span>Got lost? </span>
            <a href="https://depay.com" title="DePay Homepage" className='text-decoration-none'>Go back to the homepage.</a>
          </small>
        </div>
      </div>
    </footer>
  )
}
export default React.memo(Footer)
