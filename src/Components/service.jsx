import React from "react";
import "../style/service.scss";
import { Card, Col, Container, Row } from "reactstrap";

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
        class="feather feather-cast"
        color="#FD4766"
      >
        <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
        <line x1="2" y1="20" x2="2.01" y2="20"></line>
      </svg>
    ),
    title: "business stratagy",
    text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
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
        class="feather feather-monitor"
        color = "#337dff"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "business stratagy",
    text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
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
        class="feather feather-send"
        color="#12d8df"
      >
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    ),
    title: "business stratagy",
    text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
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
        class="feather feather-monitor"
        color="#59C98D"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "business stratagy",
    text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
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
        class="feather feather-cast"
        color="#6F41F6"
      >
        <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
        <line x1="2" y1="20" x2="2.01" y2="20"></line>
      </svg>
    ),
    title: "business stratagy",
    text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
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
        class="feather feather-monitor"
        color="#357FF6"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "business stratagy",
    text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
];
export default function Service() {
  return (
    <main id="service">
      <Container>
        <Row>
          <Col className="service_theme text-center">
            <p>What we can do for you</p>
            <p>Services provide for you.</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </Col>
        </Row>
        <Row>
          {card.map(({ icon, title, text }) => (
            <Col xs="12" lg={{ size: "4" }} md={{ size: "6" }}>
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
