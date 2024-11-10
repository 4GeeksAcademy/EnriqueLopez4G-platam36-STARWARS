import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Context } from '../store/appContext';
import { loremIpsum } from 'lorem-ipsum';

const LearnMorePlanet = () => {
 const { idPlanet } = useParams();
 const { store } = useContext(Context);
 const { planets } = store;

 const randomText = loremIpsum({
  count: 2,
  units: 'paragraphs',
  format: 'plain',
 });

 const planet = planets.find(plan => plan.id === idPlanet);

 useEffect(() => {}, [idPlanet]);

 if (!planet) {
  return <div>Cargando...</div>;
 }

 return (
  <Container>
   <Row className="d-flex align-items-center justify-content-center">
    <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
     <img
      src={planet.imgSrc || "https://via.placeholder.com/800x600"}
      alt={planet.name}
      className="img-fluid"
      style={{
       maxWidth: '300px',
       maxHeight: '500px',
       objectFit: 'contain'
      }}
     />
    </Col>
    <Col xs={12} md={6}>
     <Card className="h-100 bg-dark text-center">
      <Card.Body>
       <Card.Title className="text-warning fs-1">
        {planet.name}
       </Card.Title>
       <Card.Text className="fs-5">
        {planet.gravity && `Gravity: ${planet.gravity}`}
       </Card.Text>
       <Card.Text className="fs-5">
        {planet.terrain && `Terrain: ${planet.terrain}`}
       </Card.Text>
       <Card.Text>
        {randomText}
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
   </Row>
   <Row className="text-warning text-center">
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Name</div>
     <div>{planet.name}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Climate</div>
     <div>{planet.climate}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Population</div>
     <div>{planet.population}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Period</div>
     <div>{planet.orbital_period}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Rotation Period</div>
     <div>{planet.rotation_period}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Diameter</div>
     <div>{planet.diameter}</div>
    </Col>
   </Row>
  </Container>
 );
};

export default LearnMorePlanet;