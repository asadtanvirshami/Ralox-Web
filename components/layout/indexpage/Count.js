import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Count = () => {
  return (
    <Container style={{ marginTop: 100 }}>
      <Row className="countup-div">
        <Col md={3} xs={12}>
          <ul>
            <li>
              <h3>Active Clients</h3>
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

        <Col md={3} xs={12}>
          <ul>
            <li>
              <h3>Active Clients</h3>
            </li>
            <li className="countup-number">
              <CountUp end={100} redraw={true}>
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

        <Col md={3} xs={12}>
          <ul>
            <li>
              <h3>Active Clients</h3>
            </li>
            <li className="countup-number">
              <CountUp end={100} redraw={true}>
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

        <Col md={3} xs={12}>
          <ul>
            <li>
              <h3>Active Clients</h3>
            </li>
            <li className="countup-number">
              <CountUp end={100} redraw={true}>
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
