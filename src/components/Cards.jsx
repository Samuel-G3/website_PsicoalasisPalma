import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Cards.css"; 
import { Container } from 'react-bootstrap';
// import home1  from "../public/home1.png"

 import l2 from '../assets/l2.png'
 import logo0 from "../assets/logo0.png"
  
const cards = [
{
id:1,
title: 'title1',
image: l2
},
{
  id:2,
  title: 'title2',
  image: logo0
}
]
 




const Cards = () => {
  return (
    
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((cards, card) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={cards.image} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
   
  )
}

export default Cards