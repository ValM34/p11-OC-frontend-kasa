import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Slider from '../components/Slider'
import MainLayout from '../layouts/MainLayout'
import { useState, useEffect } from 'react'
import colorfulStar from '../assets/images/star-colorful.svg'
import grayStar from '../assets/images/star-gray.svg'

export default function HousingCard() {
  const [data, setData] = useState(null);
  
  const getData = () => {
    fetch('../logements.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const accommodationId = window.location.href.split('/')[4];
        const actualAccommodationIndex = data.findIndex((element) => element.id === accommodationId);
        if(actualAccommodationIndex === -1) {
          window.location.href = "/erreur404";
        }
        const actualAccommodation = data[actualAccommodationIndex];
        setData(actualAccommodation);
      })
  }
  
  const colorfulStarsElement = [];
  let hostFirstname = '';
  let hostName = '';
  if(data) {
    for(let i = 0; i < data.rating; i++) {
      colorfulStarsElement.push(<img key={i} src={colorfulStar} alt="etoile colorée" />)
    }
    hostFirstname = data.host.name.split(' ')[0];
    hostName = data.host.name.split(' ')[1];
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <MainLayout>
      <div className="housing-card-page">
        <section className="slider-section">
          {data ? <Slider actualAccommodation={data} /> : ""}
        </section>
        <section className="informations-section">
          <div className="informations-subsection">
            <div>
              <h1 className="housing-card-title">{data && data.title}</h1>
              <p className="housing-card-location">{data && data.location}</p>
              <div className="housing-card-tags-container">
                {data && data.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </div>
            <div className ="rating-host-container">
              <div className="rating-container">
                <div className="colorful-stars-container">
                  {data && colorfulStarsElement}
                </div>
                <div className="gray-stars-container">
                  <img src={grayStar} alt="etoile grise" />
                  <img src={grayStar} alt="etoile grise" />
                  <img src={grayStar} alt="etoile grise" />
                  <img src={grayStar} alt="etoile grise" />
                  <img src={grayStar} alt="etoile grise" />
                </div>
              </div>
              <div className="host-container">
                <div className="host-name-container">
                  <p>{data && hostFirstname}</p>
                  <p>{data && hostName}</p>
                </div>
                <div className="avatar-host-container">{data && <img src={data.host.picture} alt="avatar du propriétaire" />}</div>
              </div>
            </div>
          </div>
          <div className="collapses-container">
            <Collapse title="Description">
              {data && data.description}
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {data && data.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
              </ul>
            </Collapse>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
