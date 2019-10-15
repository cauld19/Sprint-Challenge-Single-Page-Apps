import React from "react";

import { Link } from "react-router-dom";


import {
  Card, CardBody,
  CardTitle, CardSubtitle, Col, CardImg
} from 'reactstrap';

const CharacterCard = props => {
  return(
      <Col lg="6" sm="6" xs="6">
      <Link to={`/Character-List/${props.id}`}>
        <Card style={{ backgroundColor: '#e6e6e6', borderColor: '#333'}}>
          <CardBody>
            <CardImg src={props.image} width="100%" top /> 
            <CardTitle> <h2>{props.name}</h2> </CardTitle>
            <hr />
            <CardSubtitle> <h5>Species: {props.species}</h5></CardSubtitle>
            <hr />
            <CardSubtitle> <h6>Gender: {props.gender}</h6></CardSubtitle>
          </CardBody>
      </Card>
    </Link>
    </Col>
  ) 
}

export default CharacterCard;
