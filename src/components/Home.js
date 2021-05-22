import React from 'react'
import { Spring } from "react-spring";
import './Home.css';
import {DesplegarInfo} from './Info'
import { Jumbotron, ListGroup, Image, Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import starwars from "../images/Star-Wars.jpg"
import starwars1 from "../images/Star-Wars1.png"
import starwars2 from "../images/Star-Wars2.png"
import ghibli1 from "../images/ghibli1.png"
import ghibli2 from "../images/ghibli2.png"
import ghibli3 from "../images/ghibli3.png"
import dance from "../images/dance.gif"

export const Home = () => {
    return (
        <Spring 
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        >
            { props => (
            <div style={props}>
                 <div className="container-fluid mt-2">

                    <Jumbotron className="bg-warning text-center">
                        <div>
                             <Image src={starwars} className="image" />
                            <h1>Hello, I'm Oscar</h1>
                            <p>
                             I am a Jr.Full-stack web developer who loves to learn and create websites using the imagination and tools like React, always trying to do more to learn more.
                            </p> 
                         </div>

                    </Jumbotron>

                </div>
            </div>
            )}
        </Spring>
            
    )
}

export const Description = () => {
    return (

        <div className="container-fluid">
            <Jumbotron className="bg-warning text-center ">

                <h1><img src="https://img.icons8.com/ios-filled/50/000000/super-mario.png" alt="" /> About <img src="https://img.icons8.com/dotty/50/000000/sonic-the-hedgehog-1.png" alt="" /></h1>
                <div className="d-flex justify-content-center">
                    <ListGroup as="ul" className="list d-flex justify-content-center">
                        <ListGroup.Item as="li" active className="bg-dark mt-2">
                            Hobbies
                </ListGroup.Item>
                        <ListGroup.Item as="li">I like to play videogames, watch anime and some series.</ListGroup.Item>
                        <ListGroup.Item as="li">
                            Learn new things about technology and programming.
                </ListGroup.Item>
                        <ListGroup.Item as="li" >Listen to music.</ListGroup.Item>
                    </ListGroup>
                </div>


            </Jumbotron>

        </div>

    )
}
export const Projects = () => {
    return (
        <Container fluid>
            <h1 className="title text-center mb-4">Projects</h1>
            <Row>

                <Col>
                    <Jumbotron className="bg-warning ">
                        <Carousel className="mb-3">
                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={ghibli1}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={ghibli2}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={ghibli3}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                        <h1>Ghibli's Films</h1>
                        <p>
                             Ghibli's Films is website about movies made by Studio Ghibli, you can find information about the films, characters and places.
                            
                            </p>
                        <p>
                            <Button variant="danger" href="https://ghibli-films-team-4a.herokuapp.com/" >Go to Ghibli's Films</Button>
                        </p>
                    </Jumbotron>
                </Col>
                <Col>
                    <Jumbotron className="bg-warning">
                        <Carousel className="mb-3">

                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={starwars2}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={starwars1}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                        <h1>Star Wars</h1>
                        <p>
                           It's a website about characters and places from Star Wars using the Star Wars's SWAPI. 
                        <p>
                           <strong>May the force be with you!</strong> 
                        </p>
                        </p>
                        
                        <p>
                            <Button variant="danger" href="https://starwars-blog-reading-list.vercel.app/" >Go to Star Wars</Button>
                        </p>

                    </Jumbotron>

                </Col>
            </Row>
        </Container>
    )

}
export const Contact = () => {
    return (
        <Container fluid>
            <Jumbotron className="text-center bg-warning">
                <h1>Contact.</h1>

                <Image src={dance} className="star mt-3" />

                <div>
                  <DesplegarInfo/>  
                </div>
                
            </Jumbotron>
        </Container>

    )
}



