import React from "react";
import { Carousel, Card } from "react-bootstrap";
import tuto from "../assets/tuto.jpg";
import forum from "../assets/forum.jpg";
import projet from "../assets/projet.jpg";
const MyCarousel = () => {
  return (
    
    <Carousel
      interval={2000}
      className="d-flex justify-content-center align-items-center"
    >
        
      <Carousel.Item>
        <Card
          style={{ width: "18rem", margin: "auto" }}
          className="text-center"
        >
          <Card.Img variant="top" src={projet} />
          <Card.Body>
            <Card.Title>Collaboration</Card.Title>
            <Card.Text>
              Les utilisateurs peuvent former des équipes et collaborer sur des
              projets de programmation. L'application fournit des outils de
              partage de code en temps réel, permettant aux membres de
              travailler ensemble sur un même projet, de résoudre des problèmes
              de programmation et de suivre les modifications apportées au code.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card
          style={{ width: "18rem", margin: "auto" }}
          className="text-center"
        >
          <Card.Img variant="top" src={forum} />
          <Card.Body>
            <Card.Title>Forum de Discussion</Card.Title>
            <Card.Text>
              {" "}
              Les étudiants peuvent poser des questions, partager des conseils
              et discuter de sujets liés à la programmation, aux langages de
              programmation, aux frameworks, aux outils de développement, etc.
              Ils peuvent également participer à des discussions sur des sujets
              spécifiques et bénéficier de l'expérience des autres membres.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card
          style={{ width: "18rem", margin: "auto" }}
          className="text-center"
        >
          <Card.Img variant="top" src={tuto} />
          <Card.Body>
            <Card.Title>Tutoriel</Card.Title>
            <Card.Text>
              L'application propose une sélection de ressources d'apprentissage
              telles que des tutoriels, des articles, des vidéos et des cours en
              ligne pour aider les étudiants à améliorer leurs compétences en
              génie logiciel. Les utilisateurs peuvent également recommander des
              ressources qu'ils ont trouvées utiles.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
