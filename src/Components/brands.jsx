import React from "react";
import {
  Card,
  CardImg,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import "../style/brands.scss";

const images = [
  {
    img: "./images/brand-01.png",
  },
  {
    img: "./images/brand-02.png",
  },
  {
    img: "./images/brand-03.png",
  },
  {
    img: "./images/brand-05.png",
  },
  {
    img: "./images/brand-04.png",
  },
  {
    img: "./images/brand-08.png",
  },
  {
    img: "./images/brand-06.png",
  },
  {
    img: "./images/brand-09.png",
  },
  {
    img: "./images/brand-07.png",
  },
];

export default function Brands() {
  return (
    <main id="brand">
      <Container>
        <Row>
          <Col className="brand_theme text-center">
            <p>Top clients</p>
            <p>We worked with brands.</p>
          </Col>
        </Row>
        <Nav>
          {images.map(({ img }) => (
            <NavItem>
              <NavLink>
                <CardImg src={img}></CardImg>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Container>
    </main>
  );
}
