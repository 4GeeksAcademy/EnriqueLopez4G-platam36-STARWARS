import React, { useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import { Card, Col, Button, Row } from "react-bootstrap";
import { Context } from "../store/appContext";

const People = () => {
  const { store, actions } = useContext(Context);
  const { people, peopleLoading, error, nextPage } = store;


  useEffect(() => {
    if (!people.length) {
      actions.loadPeople();
    }
  }, [people.length, actions]);

  if (peopleLoading && !people.length) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid">
      <h3 className="text-center text-danger mb-3">
        <a href="https://fontmeme.com/star-wars-font/">
          <img
            src="https://fontmeme.com/permalink/241109/806471b28db08f64608dbe354d5b74ed.png"
            alt="star-wars-font"
          />
        </a>
      </h3>
      <div id="containerCharacters" className="scrollableCharacters">
        <Row>
          {people.map((character) => (
            <Col xs={12} sm={6} md={4} lg={3} key={character.url} className="mb-4">
              <Card className = "rounded-lg">
                <div className="imageContainer">
                  <Card.Img
                    variant="top"
                    src={character.imgSrc || "https://via.placeholder.com/200x200?text=No+Image"}
                  />
                </div>
                <Card.Body className="bg-dark text-warning">
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    <span>Gender: {character.gender || "Loading..."}</span><br />
                    <span>Hair: {character.hair_color || "Loading..."}</span><br />
                    <span>Eye Color: {character.eye_color || "Loading..."}</span>
                  </Card.Text>
                  <div className="d-flex justify-content-around">
                    <Link to= {`/LearnMorePeople/${character.id}` }>
                      <Button variant="outline-primary">Learn More</Button>
                    </Link>
                    <a
                      href="#"
                      className={`fa fa-heart ${character.favorite ? 'text-danger' : 'text-warning'} link-danger link-offset-2 text-decoration-none fs-2`}
                      onClick={(e) => {
                        e.preventDefault(); 
                        actions.toggleFavorite(character.id, "people"); 
                      }}
                    >
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {nextPage && (
          <div className="text-center mt-4">
            <Button
              variant="primary"
              onClick={actions.loadPeople}
              disabled={peopleLoading}
            >
              {peopleLoading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default People;