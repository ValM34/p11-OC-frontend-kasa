import MainLayout from '../layouts/MainLayout'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Slider from '../components/Slider'
import Thumbnail from '../components/Thumbnail'

export default function Root() {
  return (
    <MainLayout>
      Home
      <Tag>Tag test</Tag>
      <div style={{width: "10px", display: "inline-block"}}></div>
      <Tag>Tag test 2</Tag>
      <div style={{width: "10px", display: "inline-block"}}></div>
      <Tag>Tag test 333333333333</Tag>
      <div style={{width: "10px", display: "inline-block"}}></div>
      <div className="collapses-container">
        <div className="collapse-container">
          <Collapse title={"Description"}>{dataTest.description}</Collapse>
        </div>
        <div className="collapse-container">
          <Collapse title={"Equipements"}>
            <ul>
              {dataTest.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
            </ul>
          </Collapse>
        </div>
      </div>
      <br />
      <Slider />
      <br />
      <Thumbnail />
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