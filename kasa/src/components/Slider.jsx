import { useState } from 'react'
import chevronSliderWhite from '../assets/images/chevron-slider-white.svg'

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if(activeIndex < dataTest.pictures.length - 1) {
      return setActiveIndex(activeIndex + 1);
    }

    return setActiveIndex(0);
  }

  const previous = () => {
    if(activeIndex > 0) {
      return setActiveIndex(activeIndex - 1);
    }

    return setActiveIndex(dataTest.pictures.length - 1);
  }

  return(
    <div className={`slider-container${dataTest.pictures.length === 1 ? ' single' : ''}`}>
      <div className="pictures-container">
        <ul>
          {dataTest.pictures.map((picture, index) => <li key={index}><img src={picture} className={`${activeIndex === index ? 'active' : ''}`} alt="image du logement" /></li>)}
        </ul>
      </div>
      <div className="btns-container">
        <img className="chevron-slider prev" src={chevronSliderWhite} onClick={previous} alt="chevron suivant" />
        <img className="chevron-slider next" src={chevronSliderWhite} onClick={next} alt="chevron précédant" />
      </div>
      <div className="slider-counter">
        {activeIndex + 1}/{dataTest.pictures.length}
      </div>
    </div>
  )
}

const dataTest = 	{
  "id": "6ff132c6",
  "title": "Charmant studio",
  "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
  "pictures": [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-3.jpg"
  ],
  "description": "Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.",
  "host": {
    "name": "Michel Romy",
    "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg"
  },
  "rating": "4",
  "location": "Ile de France - Paris 13e",
  "equipments": [
    "Équipements de base",
    "Four",
    "Frigo",
    "Wi-fi",
    "Micro-Ondes"
  ],
  "tags": [
    "Studio",
    "Charmant",
    "13e"
  ]
}
