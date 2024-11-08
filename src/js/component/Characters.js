import React, { useEffect, useState, useContext } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import './Characters.css';
import { Context } from "../store/appContext";

const Characters = () => {
  const { store, actions } = useContext(Context);
  const { people, loading, error, nextPage } = store; // Usar 'people' en lugar de 'characters'

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && store.people.length === 0) {  // Cambiar 'characters' por 'people'
      actions.loadPeople(); // Cambiar 'loadCharacters' por 'loadPeople'
      setLoaded(true);
    }
  }, [store.people, loaded, actions]); // Cambiar 'characters' por 'people'

  if (loading && !people.length) {  // Cambiar 'characters' por 'people'
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid">
      <div className="h3 text-danger" style={{ marginTop: "1rem", marginBottom: "1rem", textAlign: "left" }}>
        Characters
      </div>

      <div id="containerCharacters" className="scrollableCharacters">
        <Row>
          {people.map((character) => (  // Cambiar 'characters' por 'people'
            <Col xs={12} sm={6} md={4} lg={3} key={character.url} style={{ marginBottom: "20px" }}>
              <Card>
                <div className="imageContainer">
                  <Card.Img
                    className="zoomImage"
                    variant="top"
                    src={character.imgSrc || "https://via.placeholder.com/200x200?text=No+Image"}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                      backgroundColor: "#000",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
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
                      className={`btn ${character.favorite ? 'btn-danger' : 'btn-warning'}`} 
                      onClick={() => actions.toggleFavorite(character.url, 'people')}  // Cambiar para usar 'people'
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
              onClick={() => actions.loadPeople()}  // Cambiar para usar 'loadPeople'
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

export default Characters;
