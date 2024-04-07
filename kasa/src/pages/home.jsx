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
