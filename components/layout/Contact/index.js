import React,{useState} from 'react'
import { Row, Col,Form,Button,Forms } from "react-bootstrap";

const Index = () => {
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [num, setNum] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [Query, setQuery] = useState("")

  return (
    <section className="section-div_main">
        <Row className=""> 
          <Col md={6} className="container">
            <div className=" contact-content">
              <div className="mb-4">
              <h1 className="mb-4">Get In Touch</h1>
              <p style={{textAlign:'justify'}}>
                Whether you’re looking for a simple or more elaborate design,
                colourful or something more understated – we have expertise in
                the latest trends, techniques and technology to serve you with
                only the high standard services.
              </p>
              </div>
              <ul>
                <li>
                  <img src={'phone.png'} className='img-fluid mx-3' style={{height:35}}/>
                  <span style={{position:'relative', top:3}}> Call Us: +92 3361818434</span>
                </li>
                <br/>
                <li>
                  <img src={'email.png'} className='img-fluid mx-3' style={{height:35}}/>
                  <span style={{position:'relative', top:3}}>Info email: info@raloxsoft.com</span>
                </li>
                <br/>
                <li>
                  <img src={'email.png'} className='img-fluid mx-3' style={{height:35}}/>
                  <span style={{position:'relative', top:3}}>Support email: support@raloxsoft.com</span>
                </li>
                <br/>
                <li>
                  <img src={'location.png'} className='img-fluid mx-3' style={{height:35}}/>
                  <span style={{position:'relative', top:3}}>Toronto,Canada</span>
                </li>
                <br/>
                <li>
                  <img src={'location.png'} className='img-fluid mx-3' style={{height:35}}/>
                  <span style={{position:'relative', top:3}}>Karachi,Pakistan</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={5} className="" >
            <div className="container mt-5">
              <div className="d-flex">
              <Form >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="xyz@gmail.com"/>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">   
                  <Form.Label>Query</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Project Related</option>
                    <option>Customer Support</option>
                    <option>Else</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Country</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button className="btn-md" type="submit">
                Submit
              </Button>
            </Form>
              </div>
            </div>
          </Col>
        </Row>
      </section>
  )
}

export default Index