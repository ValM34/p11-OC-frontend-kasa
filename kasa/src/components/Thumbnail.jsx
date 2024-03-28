import { useLocation } from 'react-router-dom'

export default function Thumbnail({accomodation}) {
  return(
    <a href={`/fiche-logement/${accomodation.id}`} className="thumbnail">
      <img src={accomodation.cover} alt="image du logement" />
      <p>{accomodation.title}</p>
    </a>
  )
}
