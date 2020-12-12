import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <ul class="squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div id="middle">
        <div className="top">
          <div className="logo">
            <img src="/assets/images/logo.png" />
          </div>
          <h1 style={{ fontWeight: "700" }}>Coming Soon
        <div id="divider"></div>
          </h1>
        </div>
        <div className="bottom">
          <h3 style={{ fontWeight: "200" }}>
            We Are Currently Working On Creating Our New Website.
        </h3>
          <h2 style={{ fontWeight: "700" }}>We Will Be Launching Soon.</h2>
        </div>

        <div className="social-media">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </>
  )
}
