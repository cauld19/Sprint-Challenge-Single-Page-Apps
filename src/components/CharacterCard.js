import React from "react";

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col, CardImg
} from 'reactstrap';

const CharacterCard = props => {
  return(
    <Col lg="6" sm="6" xs="6">
    <Card style={{ backgroundColor: '#e6e6e6', borderColor: '#333'}}>
        <CardBody>
          <CardImg src={props.image} width="100%" top /> 
          <CardTitle> <h2>{props.name}</h2> </CardTitle>
          <hr />
          <CardSubtitle> <h4>Gender: {props.gender}</h4></CardSubtitle>
          <CardText>Species: {props.species} </CardText>
        </CardBody>
    </Card>
    </Col>
  ) 
}

export default CharacterCard;
