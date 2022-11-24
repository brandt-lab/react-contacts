import React, { Component } from 'react'
import './App.css';
import Contacts from './components/Contacts';
import {Container,Row,Col}from 'react-bootstrap';
import ContactsFrom from './components/ContactsFrom';



export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      students:[
        {
          name:"Sam Generals",
          phone:"0244608319",
          location:"Accra"
        },
        {
          name:"John Joshua",
          phone:"0272621562",
          location:"Accra"
        },
        {
          name:"Badiako Boadi",
          phone:"0552288681",
          location:"Accra"
        },
        {
          name:"Nana Asabr",
          phone:"0547922260",
          location:"Accra"
        },
        {
          name:"Joshua Doe",
          phone:"0243168184",
          location:"Accra"
        },
      ],
    };
  }

  addNewStudent=(newStudent)=>{
    console.log(newStudent);
    this.setState({
      students:[...this.state.students,newStudent]
    })
  }

  render() {
    return (
      <div>
        <Container  fluid>
      <Row>
        <Col  md="4" ><ContactsFrom addNewStudent={this.addNewStudent}/></Col>
        <Col><Contacts students={this.state.students}/></Col>
      </Row>
    </Container>
        
      </div> 
    )
  }
}
