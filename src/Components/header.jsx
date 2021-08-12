import { React, useState } from "react";
import {
  CardImg,
  Container,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Button,
  NavbarBrand,
  Row,
  Col,
  Card,
} from "reactstrap";
import "../style/header.scss";

const menu = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/",
    title: "Service",
  },
  {
    path: "/",
    title: "About",
  },
  {
    path: "/",
    title: "Pages",
  },
  {
    path: "/",
    title: "Blocks",
  },
  {
    path: "/",
    title: "Contact",
  },
];

const card = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    title: "awarded design",
    text: "There are many variations variations of passages of Lorem Ipsum available, but the majority have suffered."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cast"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg>,
    title: "design & creative",
    text: "Passages there are many variations variations of of Lorem Ipsum available, but the majority have suffered."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>,
    title: "app development",
    text: "Variations There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
  },
]


export default function Header() {
  const [count, setcount] = useState(false);
  const buttonClick = () => {
    setcount(!count);
  };

  return (
    <main id="header" >
      <Navbar className="py-4 px-lg-5 px-3">
        <NavbarBrand>
          <CardImg src="./images/logo.png"></CardImg>
        </NavbarBrand>
        <div className="d-flex align-items-center">
          <Nav
            className={
              count ? "nav2 align-items-center" : "nav1 align-items-center"
            }
          >
              {/* array yaratib uni map orqali chizib oldim */}
            {menu.map(({ path, title }) => (
              <NavItem>
                <NavLink className="text-light">{title}</NavLink>
              </NavItem>
            ))}
          </Nav>
          <NavItem>
            <NavLink>
              <Button>buy now</Button>
            </NavLink>
          </NavItem>
          {/* fontawesome iconlaridan foydalandim index.jsda import qilingan */}
          <div className="d-lg-none">
            <i
              className={count ? "fas fa-times " : "fas fa-bars "}
              onClick={buttonClick}
            ></i>
          </div>
        </div>
      </Navbar>
      <Container className = "py-5">
          <Row>
              <Col >
                <p className = "header_theme">
                    design driven development your web products.
                </p>
              </Col>
          </Row>
          <Row className = "py-5"> 
          {card.map(({icon,title,text}) => (
            <Col xs = "12" lg = {{size: "4"}} md = {{size: 6}} sm = {{size: "6"}} >
                <Card>
                  <i>{icon}</i>
                  <p>{title}</p>
                  <p>{text}</p>
                </Card>
            </Col>
          ))}
          </Row>
      </Container>
    </main>
  );
}
