import { Container, Form, Button, Row, Nav, Col } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [yes, setYes] = useState(false);

  const formData = {
    email: email,
    name: name,
    yes: yes,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    //add route here
  };

  return (
    <Container className='generator'>
      <Row className='justify-content-center '>
        <Nav className='justify-content-center'>
          <h1>Generator</h1>
        </Nav>
        <Col lg='8' md='10' xs='10'>
          <Row className='form-row'>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='userName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Name'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='Yes'
                  checked={yes}
                  onChange={(e) => setYes(e.target.checked)}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
