import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Context } from '../store/appContext';
import { loremIpsum } from 'lorem-ipsum';

const LearnMorePeople = () => {
 const { idPeople } = useParams();
 const { store } = useContext(Context);
 const { people } = store;

 const randomText = loremIpsum({
  count: 2,
  units: 'paragraphs',
  format: 'plain',
 });

 const person = people.find(person => person.superId === idPeople);

 useEffect(() => {}, [idPeople]);

 if (!person) {
  return <div>Cargando...</div>;
 }

 return (
  <Container>
   <Row className="d-flex align-items-center justify-content-center">
    <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
     <img
      src={person.imgSrc || "https://via.placeholder.com/800x600"}
      alt={person.name}
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
        {person.name}
       </Card.Title>
       <Card.Text className="fs-5">
        {person.mass && `Mass: ${person.mass}`}
       </Card.Text>
       <Card.Text className="fs-5">
        {person.hair_color && `Hair Color: ${person.hair_color}`}
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
     <div>{person.name}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Birth Year</div>
     <div>{person.birth_year}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Gender</div>
     <div>{person.gender}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Height</div>
     <div>{person.height}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Skin color</div>
     <div>{person.skin_color}</div>
    </Col>
    <Col xs={12} sm={6} md={2}>
     <div className="text-white">Eye Color</div>
     <div>{person.eye_color}</div>
    </Col>
   </Row>
  </Container>
 );
};

export default LearnMorePeople;