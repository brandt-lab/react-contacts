import React from 'react'
import {Card,Button,Col}from 'react-bootstrap/';

function Contact(props) {

    let puplils=props.students;
  return (
    
        <Col  md="4" style={{ marginBottom: "1rem" }}>
      <Card> 
      <Card.Body>
        <Card.Title>Codetrain User</Card.Title>
        <Card.Text className="mb-2 text-muted">Name:{puplils.name}</Card.Text>
        <Card.Text className="mb-2 text-muted">phone Number:{puplils.phone}</Card.Text>
        <Card.Text className="mb-2 text-muted">Location:{puplils.location}</Card.Text>
       
       
        <Button variant="danger">Delete</Button>
        <Button variant="secondary">Edit</Button>
      </Card.Body>
    </Card>
    </Col>
    
  )
}

export default Contact
