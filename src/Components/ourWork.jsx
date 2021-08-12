import React from "react";
import { Card, CardImg, Col, Container, Row } from "reactstrap";
import "../style/ourWork.scss";

const card = [
    {
        img: "./images/portfolio-8.jpg",
        text1: "Development",
        text2: "Web Design",
        text3: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit."
    },
    {
        img: "./images/portfolio-9.jpg",
        text1: "Product Design",
        text2: "App Development",
        text3: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit."
    },
    {
        img: "./images/portfolio-10.jpg",
        text1: "Application",
        text2: "Photoshop Design",
        text3: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit."
    },
]
export default function OurWork() {
  return (
    <main id="our_work">
      <Container>
        <Row>
          <Col className="our_work_theme text-center">
            <p>Our project</p>
            <p>Some of our Recent Works</p>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </Col>
        </Row>
        <Row>
            {card.map(({img,text1,text2,text3}) => (
            <Col xs = "12" lg = {{size: "4"}} md = {{size: "6"}} sm = {{size: "6"}}>
                <Card>
                    <CardImg src = {img}></CardImg>
                    <div>
                        <p>{text1}</p>
                        <p>{text2}</p>
                        <p>{text3}</p>
                    </div>
                </Card>
            </Col>
            ))}
        </Row>
      </Container>
    </main>
  );
}
