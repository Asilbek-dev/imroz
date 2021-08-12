import React from "react";
import {
  Button,
  CardImg,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import "../style/footer.scss";

const menu = [
  {
    title: "Portfolio",
  },
  {
    title: "About",
  },
  {
    title: "Our Blog",
  },
  {
    title: "Our Team",
  },
  {
    title: "Contact",
  },
];

const email = [
  {
    title: " admin@example.com",
    mail: "Email: ",
  },
  {
    title: " hr@example.com",
    mail: "Email: ",
  },
  {
    title: " 01957485123",
    mail: "Phone: ",
  },
];
export default function Footer() {
  return (
    <main id="footer">
      <Container>
        <div className="d-lg-flex d-block justify-content-between align-items-center mb-5">
          <p>Enough Talk, Let's Build Something Together</p>
          <Button>read out now</Button>
        </div>
        <hr />
        <Row>
          <Col
            lg={{ size: "4" }}
            md={{ size: "6" }}
            sm={{ size: "12" }}
            className="footer_logo"
          >
            <CardImg src="./images/logo-light.png"></CardImg>
            <p>
              Copyright © 2021 Imroz React Template. Built with love in
              Bangladesh All rights reserved.
            </p>
          </Col>
          <Col
            lg={{ size: "2" }}
            md={{ size: "6" }}
            sm={{ size: "12" }}
            className="footer_menu footer_menu1"
          >
            <h4>quick link</h4>
            <Nav>
              {menu.map(({ title }) => (
                <NavItem>
                  <NavLink>{title}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col
            lg={{ size: "2" }}
            md={{ size: "6" }}
            sm={{ size: "12" }}
            className="footer_menu"
          >
            <h4>company</h4>
            <Nav>
              {menu.map(({ title }) => (
                <NavItem>
                  <NavLink>{title}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col
            lg={{ size: "3" }}
            md={{ size: "6" }}
            sm={{ size: "12" }}
            className="footer_menu"
          >
            <h4>say hello</h4>
            <Nav>
              {email.map(({ title,mail }) => (
                <NavItem>
                    {mail}<NavLink>{title}</NavLink>
                </NavItem>
              ))}
              <NavItem className = "footer_messanger">
                  <NavLink>
                      <i className = "fab fa-facebook-f"></i>
                  </NavLink>
                  <NavLink>
                      <i className = "fab fa-linkedin-in"></i>
                  </NavLink>
                  <NavLink>
                      <i className = "fab fa-twitter"></i>
                  </NavLink>
                  <NavLink>
                      <i className = "fab fa-instagram"></i>
                  </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
