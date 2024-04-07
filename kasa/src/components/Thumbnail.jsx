import PropTypes from 'prop-types'

function Thumbnail({accomodation}) {
  return(
    <a href={`/fiche-logement/${accomodation.id}`} className="thumbnail">
      <img src={accomodation.cover} alt="image du logement" />
      <p>{accomodation.title}</p>
    </a>
  )
}

Thumbnail.propTypes = {
  accomodation: PropTypes.object
}

export default Thumbnail;