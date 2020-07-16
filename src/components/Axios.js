import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const Axios = () => {
  const [pokemon, setPokemon] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then((response) => setPokemon(response.data.results));
  }, []);

  console.log(pokemon);
  const onClick = () => {
    setDisplay(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button className="my-3 btn-primary btn-lg" onClick={onClick}>
            Axios Pokemon
          </Button>
          <div>
            {pokemon.length > 0 && display
              ? pokemon.map((pokemon, index) => {
                  return <p key={index}>{pokemon.name}</p>;
                })
              : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Axios;
