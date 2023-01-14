import React from "react";
import { Row, Col, Form, Button, Forms } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div>
      <div className="container mt-5 mb-5 contactform-div" >
      <h3 className="mb-4 text-center">
        We love coming up with fresh ideas to increase conversions!
      </h3>
        <div className="justify-content-center m-auto fields-div" >
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="formGridEmail" className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col}md={6} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} md={6} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="xyz@gmail.com" />
            </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md={12} controlId="formGridCity">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} />
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
    </div>
  );
};

export default ContactForm;
