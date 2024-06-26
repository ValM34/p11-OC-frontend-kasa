import MainLayout from "../layouts/MainLayout";
import aboutMainImage from "../assets/images/about-main-image.jpg";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <MainLayout>
      <div className="about-page">
        <section className="about-main-image-container">
          <img
            className="about-main-image"
            src={aboutMainImage}
            alt="image de présentation"
          />
        </section>
        <section className="collapses-container">
          <Collapse title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </Collapse>
          <Collapse title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </Collapse>
          <Collapse title="Service">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </Collapse>
          <Collapse title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </Collapse>
        </section>
      </div>
    </MainLayout>
  );
}
