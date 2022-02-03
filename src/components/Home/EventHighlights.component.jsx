import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import EventCard from "../EventCard/EventCard.component";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function EventHighlights() {
  const [event, setEvent] = useState([]);
  const eventCollectionRef = collection(db, "events-21-22");
  useEffect(() => {
    const getEvent = async () => {
      const data = await getDocs(eventCollectionRef);
      setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvent();
  }, []);
  return (
    <div>
      <Row>
        <header className="display-5 text-center py-5 fw-bold">
          Event Highlights
        </header>
      </Row>
      <Row>
        {event.map((data) => {
          if (data.highlight == true) {
            return (
              <Col className="col-md-4 d-none d-lg-block d-xl-block">
                <EventCard
                  link={data.link}
                  date={data.date}
                  img={data.image}
                  name={data.name}
                />
              </Col>
            );
          }
        })}
      </Row>

      <Flickity
        className={"carousel d-lg-none d-xl-none"} // default ''
        elementType={"div"} // default 'div'
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {event.map((data) => {
          if (data.highlight == true) {
            return (
              <Col className="mx-2">
                <EventCard
                  link={data.link}
                  date={data.date}
                  img={data.image}
                  name={data.name}
                />
              </Col>
            );
          }
        })}
      </Flickity>
    </div>
  );
}

export default EventHighlights;
