import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/contact.css'
import '../styles/footer.css'
import '../styles/home.css'
import '../styles/services.css'
import '../styles/about.css'
import Link from 'next/link'
import Image from 'next/image'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <div>
          <div id="navbar">
            <img className="logo" src="https://i.imgur.com/lHEefJp.png" alt="Harrison Printing"/>
            <div id="navbar-right">
              <Link href='./'>Home</Link>
              <Link href='./././services'>Services</Link>
              <Link href='././about'>About</Link>
              <Link href='./contact'>Contact</Link>
            </div>
          </div>

          <div>
            <Component {...pageProps}/>
          </div>
        </div>
        <footer className="footer-distributed">

          <div className="footer-left">
            <h3><img className="footer-logo" src="https://i.imgur.com/lHEefJp.png" alt="Harrison Printing"/><span></span></h3>

            <p className="footer-links">
              <Link href='./'>Home</Link>
              |
              <Link href='./contact'>Contact</Link>
              |
              <Link href='./././services'>Services</Link>
            </p>

            <p className="footer-company-name">© 2022 HARRISON PRINTING & PROMOTIONS LLC.</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p><span> 558 Eisenhower Dr Ste A </span>
                Kimberly, Wisconsin 54316</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>920-997-9940</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:support@eduonix.com">harrison.printing@yahoo.com</a></p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-company-about">

              <div>
                <span>About the company</span>
                Harrison Printing & Promotions was founded in 2007 by William Harrison.
                Harrison Printing specializes in screen printing, embroidery alongside
                banners, signs, and business card
              </div>
            </div>
            <span>
                <div className="social-links">
                    <Link href="mailto:harrison.printing@yahoo.com">
                        <a className="social-links">
                            <Image src="/mail.png" height="45" width="45"/>
                        </a>
                    </Link>
                    <Link href="tel:920-997-9940">
                        <a className="social-links">
                            <Image src="/call.png" height="45" width="45"/>
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/HarrisonPrinting">
                        <a className="social-links">
                            <Image src="/facebook.png" height="45" width="45"/>
                        </a>
                    </Link>
                </div>
            </span>
          </div>
        </footer>
      </>
  )
}

export default MyApp

