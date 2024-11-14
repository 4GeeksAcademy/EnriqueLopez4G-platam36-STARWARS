import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import './Planets.css';

const Planets = () => {
  const { store, actions } = useContext(Context);
  const { planets, planetsLoading, error, nextPage } = store;

  useEffect(() => {
    if (planets.length === 0 && !planetsLoading) {
      actions.loadPlanets();
    }
  }, [planets, planetsLoading, actions]);

  if (planetsLoading && planets.length === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-fluid" id="containerPlanets">
      <div className="text-center mb-4">
        <a href="https://fontmeme.com/star-wars-font/">
          <img
            src="https://fontmeme.com/permalink/241109/6fcda42f2a0a20da6c28989802ef9401.png"
            alt="star-wars-font"
          />
        </a>
      </div>

      {/* Overlay para oscurecer el fondo si es necesario */}
      <div className="overlay"></div>

      {/* Contenedor de las cards con scroll horizontal */}
      <div id="containerCharacters" className="d-flex overflow-auto flex-nowrap pb-5">
        {planets.map((planet) => (
          <div className="cardContainer" key={planet.superId}>
            <Card className="cardRounded">
              <div className="imageContainer">
                <Card.Img
                  src={planet.imgSrc || "https://via.placeholder.com/200x200?text=No+Image"}
                  className="customCardImg img-fluid"
                  variant="top"
                />
              </div>
              <Card.Body className="bg-dark text-warning p-3">
                <Card.Title>{planet.name}</Card.Title>
                <Card.Text>
                  <span>Terrain: {planet.terrain || "Loading..."}</span><br />
                  <span>Population: {planet.population || "Loading..."}</span>
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <Link to={`/LearnMorePlanet/${planet.superId}`}>
                    <Button variant="outline-primary">Learn More</Button>
                  </Link>
                  <a
                    href="#"
                    className={`fa fa-heart ${planet.favorite ? "text-danger" : "text-warning"} link-danger link-offset-2 text-decoration-none fs-2`}
                    onClick={(e) => {
                      e.preventDefault();
                      actions.toggleFavorite(planet.superId, "planets");
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}

        {nextPage && (
          <div className="text-center mt-3">
            <Button onClick={() => actions.loadPlanets()} disabled={planetsLoading} className="btn-lg rounded-pill shadow m-2">
              {planetsLoading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Planets;
