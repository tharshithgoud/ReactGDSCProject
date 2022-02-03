import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://formspree.io/f/mbjpgwvw", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          _replyto: email,
          message: message,
        }),
      });
      let resJson = await res.json();
      if (res.status === 401) {
        setName("");
        setEmail("");
        setResponse("Message Sent SUccesfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Col className="col-12 col-lg-6 mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 border-bottom border-primary"
          controlId="formBasicName"
        >
          <Form.Label className="display-6">Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            className="border-0"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 border-bottom border-primary"
          controlId="formBasicEmail"
        >
          <Form.Label className="display-6">Email Address</Form.Label>
          <Form.Control
            className="border-0"
            type="email"
            name="_replyto"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label className="display-6">Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            className="border border-primary"
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
          />
        </Form.Group>
        <div className="text-center">
          <Button
            type="submit"
            className="btn btn-primary rounded-pill py-2 px-3 fs-6 text-capitalize "
          >
            Submit
          </Button>
        </div>
        <div>{response ? <p>{response}</p> : null}</div>
      </Form>
    </Col>
  );
}

export default ContactForm;
