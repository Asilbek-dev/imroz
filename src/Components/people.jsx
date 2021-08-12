import React from 'react'
import { Card, CardImg, Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap'
import '../style/people.scss'


const images = [
    {
        img: "./images/testimonial-1.jpg",
    },
    {
        img: "./images/testimonial-2.jpg"
    },
    {
        img: "./images/testimonial-3.jpg"
    },
    {
        img: "./images/testimonial-4.jpg"
    },
    {
        img: "./images/testimonial-5.jpg"
    },
    {
        img: "./images/testimonial-6.jpg"
    },
    {
        img: "./images/testimonial-7.jpg"
    },
    {
        img: "./images/testimonial-8.jpg"
    },
]
export default function People() {
    return (
        <main id = "people">
            <Container>
                <Row>
                    <Col xs = "12" lg = {{size:"6"}} md = {{size: "6"}} className = "people_text">
                        <p>Afifa Sampa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                        <p><span>AFIFA SAMPA</span> - COO, AMERIMAR ENTERPRISES, INC.</p>
                    </Col>
                    <Col xs = "12" lg = {{size:"6"}} md = {{size: "6"}}>
                        <Nav>
                            {images.map(({img}) => (
                            <NavItem>
                                <NavLink className = "mb-3">
                                    <Card>
                                        <CardImg src = {img}></CardImg>
                                    </Card>
                                </NavLink>
                            </NavItem>
                            ))}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
