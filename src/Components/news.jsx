import React from "react";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";
import "../style/news.scss";

const card = [
  {
    img: "./images/blog-01.jpg",
    text1: "Development",
    text2: "What is the Difference between Web and Brand.",
  },
  {
    img: "./images/blog-02.jpg",
    text1: "Product Design",
    text2: "A big ticket gone to be an interesting look New York.",
  },
  {
    img: "./images/blog-03.jpg",
    text1: "Application",
    text2: "Getting tickets to the big show have a closer look.",
  },
];

export default function News() {
  return (
    <main id="news">
      <Container>
        <Row>
          <Col className="news_theme text-center">
            <p>Our project</p>
            <p>Some of our Recent Works</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </Col>
        </Row>
        <Row>
          {card.map(({ img, text1, text2 }) => (
            <Col
              xs="12"
              lg={{ size: "4" }}
              md={{ size: "6" }}
              sm={{ size: "6" }}
            >
              <Card>
                <CardImg src={img}></CardImg>
                <div>
                  <p>{text1}</p>
                  <p>{text2}</p>
                  <Button>read more</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
