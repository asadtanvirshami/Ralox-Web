import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Count = () => {
  return (
    <Container style={{ marginTop: 200 }}>
      <Row className="countup-div">
        <Col md={3} xs={12} >
          <ul>
            <li>
              <h3>ACTIVE CLIENTS</h3>
            </li>
            <li className="countup-number">
              <CountUp end={20} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </li>
          </ul>
        </Col>

        <Col md={3} xs={12} >
          <ul>
            <li>
              <h3>PROJECTS DONE</h3>
            </li>
            <li className="countup-number">
              <CountUp end={50} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </li>
          </ul>
        </Col>

        <Col md={3} xs={12} style={{padding:0}}>
          <ul>
            <li>
              <h3>PROJECT ADVISORS</h3>
            </li>
            <li className="countup-number">
              <CountUp end={10} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </li>
          </ul>
        </Col>

        <Col md={3} xs={12} >
          <ul>
            <li>
              <h3>GLORIOUS YEARS</h3>
            </li>
            <li className="countup-number">
              <CountUp end={1} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Count;
