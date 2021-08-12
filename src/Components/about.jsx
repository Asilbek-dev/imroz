import React from "react";
import '../style/about.scss'
import { Card, CardImg, Col, Container, NavLink, Row } from "reactstrap";

export default function About() {
  return (
    <main id="about">
      <Container className = "py-5">
        <Row>
          <Col lg={{ size: "5" }} xs="12">
            <CardImg className="w-100 p-3" src="./images/about-1.png"></CardImg>
          </Col>
          <Col lg={{ size: "7" }} xs="12" className = "px-3">
            <Card>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-send"
                color = "#fff"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </Card>
            <h2>refreshingly unique company about.</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <br />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>
            <br />
            <NavLink>
                purchase imroz
            </NavLink>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
