import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Card, CardBody,
    CardTitle, CardSubtitle, Col, CardImg
  } from 'reactstrap';

const Character = (props) => {
    const [character, setCharacter] = useState();
    const id = props.match.params.id;
  
    useEffect(() => {
         axios
          .get(`https://rickandmortyapi.com/api/character/${id}`)
          .then(response => {
            setCharacter(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
  
    },[id]);
    
    if (!character) {
      return <div>Loading character information...</div>;
    }
  

    console.log(character.name)
    const { name, species, gender, image} = character;
    return (
        <Col className="row d-flex justify-content-center">
        <Card style={{ backgroundColor: '#e6e6e6', borderColor: '#333'}}>
          <CardBody>
            <CardImg src={image} width="100%" top /> 
            <CardTitle> <h2>{name}</h2> </CardTitle>
            <hr />
            <CardSubtitle> <h5>Species: {species}</h5></CardSubtitle>
            <hr />
            <CardSubtitle> <h6>Gender: {gender}</h6></CardSubtitle>
          </CardBody>
      </Card>
    </Col>
    );
  }


export default Character;