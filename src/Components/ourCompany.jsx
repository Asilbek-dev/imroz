import { React, useState } from "react";
import "../style/ourCompany.scss";
import { Card, Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function OurCompany() {
  const [count1] = useState(199);
  const [count2] = useState(155);
  const [count3] = useState(49);
  const [count4] = useState(55);

  const card = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-heart"
          color="#fd4766"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      number: count1,
      text: "Staticfied Customers",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-clock"
          color="#337dff"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      number: count2,
      text: "Days Of Operation",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-pie-chart"
          color="#ff8f3c"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      ),
      number: count3,
      text: "Complete Project ",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-award"
          color="#3eb75e"
        >
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      number: count4,
      text: " Win Awards",
    },
  ];

  const [focus, setFocus] = useState(false);

  return (
    <main id="our_company">
      <Container>
        <Row>
          <Col className="our_company_theme text-center">
            <p>Experts growts</p>
            <p>Our Company Growth</p>
            <p>We have grown strength over the past 20 years.</p>
          </Col>
        </Row>
        <Row>
          {/* card massivi orqali blocklarni chizib oldim && react-visibility-sensor install && react-countup install */}
          {card.map(({ icon, number, text }) => (
            <Col
              xs="12"
              lg={{ size: "3" }}
              md={{ size: "6" }}
              sm={{ size: "6" }}
            >
              <Card>
                <i>{icon}</i>
                <p>
                  <CountUp
                    start={focus ? 0 : null}
                    end={number}
                    duration={2}
                    redraw={true}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <span>+</span>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                </p>
                <p>{text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
