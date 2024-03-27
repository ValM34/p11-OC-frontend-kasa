import logoKasa from '../assets/images/logo.svg'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();

  const linksList = {
    home: '/',
    about: '/a-propos',
  }

  return (
    <header>
      <img src={logoKasa} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <a href={linksList.home} className={location.pathname === linksList.home ? 'active' : null}>ACCUEIL</a>
          </li>
          <li>
            <a href={`/a-propos`} className={location.pathname === linksList.about ? 'active' : null}>A PROPOS</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
