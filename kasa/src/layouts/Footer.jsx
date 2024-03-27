import logoKasaWhite from '../assets/images/logo-white.svg'

export default function Footer() {
  return(
    <footer>
      <div className="logo-container">
        <img src={logoKasaWhite} alt="logo Kasa blanc" />
      </div>
      <div className="all-right-reserved">
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  )
}