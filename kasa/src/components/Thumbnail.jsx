import { useLocation } from 'react-router-dom'

export default function Thumbnail() {
  return(
    <a href={`/fiche-logement/${dataTest.id}`} className="thumbnail">
      <img src={dataTest.cover} alt="image du logement" />
      <p>{dataTest.title}</p>
    </a>
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