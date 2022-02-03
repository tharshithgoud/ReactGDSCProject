import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "../../components/EventCard/EventCard.component";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
function Timeline() {
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
    <Container>
      <Row>
        <header className="text-center display-5 py-5">Upcomming Events</header>
      </Row>
      <Container>
      <Row>
        {event.map((data) => {
          if (data.highlight === true) {
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
          if (data.upcoming === true) {
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
      </Container>
      <Row>
        <header className="text-center display-5 py-5">Past Events</header>
      </Row>
      <Container>
      <Row>
        {event.map((data) => {
          if (data.upcoming === false) {
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
          if (data.upcoming === false) {
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
      </Container>
    </Container>
  );
}

export default Timeline;
