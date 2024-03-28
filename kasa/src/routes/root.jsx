import MainLayout from '../layouts/MainLayout'
import Thumbnail from '../components/Thumbnail'
import homeMainImage from '../assets/images/home-main-image.jpg'
import { useState, useEffect } from 'react'

export default function Root() {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch('logements.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <MainLayout>
      <div className="root-page">
        <section className="home-main-image-container">
          <img className="home-main-image" src={homeMainImage} alt="image de présentation" />
          <p className="home-main-image-title">Chez vous, partout et ailleurs</p>
        </section>
        <section className="home-thumbnails-container">
          <ul className="thumbnails-list">
            {data && data.map((accommodation) => {
              return(
                <li className="thumbnail-container" key={accommodation.id}>
                  <Thumbnail accomodation={accommodation} />
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </MainLayout>
  );
}



const dataTest = 	{
  "id": "cb02d69b",
  "title": "Magnifique appartement Rivoli",
  "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
  "pictures": [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg"
  ],
  "description": "Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.",
  "host": {
    "name": "Nathalie Jean",
    "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
  },
  "rating": "4",
  "location": "Ile de France - Paris 13e",
  "equipments": [
    "Wi-fi",
    "Équipements de base",
    "Micro-Ondes",
    "Frigo",
    "Baignoire"
  ],
  "tags": [
    "Louvre",
    "Marais",
    "Rivoli"
  ]
}