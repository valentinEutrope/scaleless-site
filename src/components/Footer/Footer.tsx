import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import config from 'config/config.json'

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-socials">
        <h4>Retrouvez-nous sur les réseaux sociaux : </h4>
        <ul>
          <li>
            <a href={config.links.facebook} target="_blank">
              <FaFacebook />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href={config.links.instagram} target="_blank">
              <AiFillInstagram />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
