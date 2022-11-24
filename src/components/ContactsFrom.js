import React,{useState}from 'react';
import {Form,Button}from 'react-bootstrap';




function ContactsFrom(props) {
    const [name, setName] = useState('')
    const[phone, setPhone]= useState(0)
    const[location, setLocation]= useState("");
     const hanleSubmit = (e) => {
        e.preventDefault();

         let newStudent={
            name:name,
            phone:phone,
            location:location
         };
         props.addNewStudent(newStudent)
     };
  return (
    <div>
      
      <Form onSubmit={hanleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  value={name} onChange={(e)=>{setName(e.target.value); }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" value={phone} onChange={(e)=>{setPhone(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" value={location} onChange={(e)=>{setLocation(e.target.value); }}/>
      </Form.Group>
      <Button className="from-btn" variant="dark" type="submit">
        Submit
      </Button>
    </Form>
      
    </div>
  )
}

export default ContactsFrom
