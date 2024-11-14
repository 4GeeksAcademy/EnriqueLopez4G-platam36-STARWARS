import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import './People.css';

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
    <div className="container-fluid" id="containerPeople">
      <h3 className="text-center text-danger mb-3">
        <a href="https://fontmeme.com/star-wars-font/">
          <img
            src="https://fontmeme.com/permalink/241109/806471b28db08f64608dbe354d5b74ed.png"
            alt="star-wars-font"
          />
        </a>
      </h3>

      {/* Overlay que cubre el contenedor */}
      <div className="overlay"></div>

      <div id="containerCharacters" className="d-flex overflow-auto flex-nowrap pb-5">
        <div className="d-flex gap-3 mb-4">
          {people.map((character) => (
            <div className="cardContainer" key={character.url}>
              <Card className="cardRounded d-flex flex-column justify-content-between">
                <div className="imageContainer">
                  <Card.Img
                    variant="top"
                    src={character.imgSrc || "https://via.placeholder.com/200x200?text=No+Image"}
                    className="customCardImg img-fluid"
                  />
                </div>
                <Card.Body className="bg-dark text-warning p-3">
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    <span>Gender: {character.gender || "Loading..."}</span><br />
                    <span>Hair: {character.hair_color || "Loading..."}</span><br />
                    <span>Eye Color: {character.eye_color || "Loading..."}</span>
                  </Card.Text>
                  <div className="d-flex justify-content-around">
                    <Link to={`/LearnMorePeople/${character.superId}`}>
                      <Button variant="outline-primary">Learn More</Button>
                    </Link>
                    <a
                      href="#"
                      className={`fa fa-heart ${character.favorite ? "text-danger" : "text-warning"} link-danger link-offset-2 text-decoration-none fs-2`}
                      onClick={(e) => {
                        e.preventDefault();
                        actions.toggleFavorite(character.superId, "people");
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {nextPage && (
          <div className="text-center mt-4">
            <Button
              variant="primary"
              onClick={actions.loadPeople}
              disabled={peopleLoading}
              className="btn-lg rounded-pill shadow m-2"
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
