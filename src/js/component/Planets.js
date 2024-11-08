import React, { useEffect, useState, useContext } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import './Planets.css';
import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const { planets, loading, error, nextPage } = store;
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && store.planets.length === 0) {
      actions.loadPlanets();
      setLoaded(true);
    }
  }, [store.planets, loaded, actions]);

  if (loading && !planets.length) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid">
      <div className="h3 text-danger" style={{ marginTop: "1rem", marginBottom: "1rem", textAlign: "left" }}>
        Planets
      </div>

      <div id="containerPlanets" className="scrollablePlanets">
        <Row>
          {planets.map((planet) => (
            <Col xs={12} sm={6} md={4} lg={3} key={character.url} style={{ marginBottom: "20px" }}>
              <Card>
                <div className="imageContainer">
                  <Card.Img
                    className="zoomImage"
                    variant="top"
                    src={planet.imgSrc || "https://via.placeholder.com/200x200?text=No+Image"}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                      backgroundColor: "#000",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{planet.name}</Card.Title>
                  <Card.Text>
                    <span className="d-block text-left">Gender: {character.gender || "Loading..."}</span>
                    <span className="d-block text-left">Hair: {character.hair_color || "Loading..."}</span>
                    <span className="d-block text-left">Eye-Color: {character.eye_color || "Loading..."}</span>
                  </Card.Text>
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                    {/* Cambiar el color del ícono de favorito */}
                    <button 
                      type="button" 
                      className={`btn ${planet.favorite ? 'btn-danger' : 'btn-warning'}`} 
                      onClick={() => actions.toggleFavorite(character.url)}
                    >
                      <i className="fa fa-heart" />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {nextPage && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Button
              variant="primary"
              onClick={actions.loadCharacters}
              disabled={loading}
              style={{ padding: "10px 20px", fontSize: "1rem" }}
            >
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Planets;
