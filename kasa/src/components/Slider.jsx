import { useState } from 'react'
import chevronSliderWhite from '../assets/images/chevron-slider-white.svg'
import PropTypes from 'prop-types'

function Slider({actualAccommodation}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if(activeIndex < actualAccommodation.pictures.length - 1) {
      return setActiveIndex(activeIndex + 1);
    }

    return setActiveIndex(0);
  }

  const previous = () => {
    if(activeIndex > 0) {
      return setActiveIndex(activeIndex - 1);
    }

    return setActiveIndex(actualAccommodation.pictures.length - 1);
  }

  return(
    <div className={`slider-container${actualAccommodation.pictures.length === 1 ? ' single' : ''}`}>
      <div className="pictures-container">
        <ul>
          {actualAccommodation.pictures.map((picture, index) => <li key={index}><img src={picture} className={`${activeIndex === index ? 'active' : ''}`} alt="image du logement" /></li>)}
        </ul>
      </div>
      <div className="btns-container">
        <img className="chevron-slider prev" src={chevronSliderWhite} onClick={previous} alt="chevron suivant" />
        <img className="chevron-slider next" src={chevronSliderWhite} onClick={next} alt="chevron précédant" />
      </div>
      <div className="slider-counter">
        {activeIndex + 1}/{actualAccommodation.pictures.length}
      </div>
    </div>
  )
}

Slider.propTypes = {
  actualAccommodation: PropTypes.object
}

export default Slider;