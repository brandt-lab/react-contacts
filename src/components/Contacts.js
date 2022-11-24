import React from 'react'
import Contact from "./Contact"
import {Container,Row}from 'react-bootstrap';

function Contacts(props) {

let puplils=props.students

  return (
    
<Container>
    <Row>
          {
            puplils.map((item , index)=>{
                return  <Contact students={item}  key={index}/>
                      
                    
                
            })
        } 
    
    </Row>
</Container>

           
       
  )
}

export default Contacts
