import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Home.css';
import {DesplegarInfo} from './Info'
import { Jumbotron, Image, Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import starwars from "../images/Star-Wars.jpg"
import starwars1 from "../images/Star-Wars1.png"
import starwars2 from "../images/Star-Wars2.png"
import ghibli1 from "../images/ghibli1.png"
import ghibli2 from "../images/ghibli2.png"
import ghibli3 from "../images/ghibli3.png"
import dance from "../images/dance.gif"
import kylo from "../images/kaaa.jpg"
import referral from '../images/referral.png'
import sports from '../images/sports.png'
import vipper from '../images/VIPERHEAD.png'

export const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-md">
                    <Image src={starwars} className="image" />


                </div>
                <div className="col-md" data-aos="slide-left" id="oscar">
                <Jumbotron className="bg-warning text-center" id="hello">
                    <div>                            
                        <h1>Hello, I'm Oscar</h1>
                        <p>
                         I am a Jr.Full-stack web developer who loves to learn and create websites using the imagination and tools like React, always trying to do more to learn more.
                        </p> 
                    </div>

                </Jumbotron>
                </div>
                
            </div>                  
        </div>
    )
}

export const Description = () => {
    return (
        <Container fluid>

            <Row>
                <Col lg={true} id="info">
                
                    <div className="aba bg-warning" data-aos="slide-right">
                        
                           <h1 className="text-black text-center" id="about"><img src="https://img.icons8.com/ios-filled/50/000000/super-mario.png" alt="" /> About <img src="https://img.icons8.com/dotty/50/000000/sonic-the-hedgehog-1.png" alt="" /></h1>
                        <div className="d-flex justify-content-center" id="hoby">
                             <ul>
                             <li>I like to play videogames, watch anime and some series.</li>
                             <li>Learn new things about technology and programming.</li>
                             <li>Listen to music.</li>
                             <li>Technologies: Node.Js, React.Js, MongoDB, Express.Js.</li>
                            </ul>
                        </div> 
                        
                        
                    </div>
                </Col>
                
                    <Col lg={true}>
                    <div className="text-center">
                       <Image src={kylo} className="image2"/> 
                    </div>
                
                </Col> 
               
               
               
            </Row>

        </Container>

    )
}
export const Projects = () => {
    return (
        <Container fluid >
            <Row style={{background:'black', justifyContent:'center'}}>
            <h1 className="title text-center mb-4 mt-5">Projects</h1>
            </Row>
            
            <Row >
                
                <Col lg={true}>
                <div data-aos="fade-right">
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
                             Ghibli's Films is a website about movies made by Studio Ghibli, you can find information about the films, characters and places.
                            
                            </p>
                        <p>
                            <Button variant="danger" href="https://ghibli-films-team-4a.herokuapp.com/" target="_blank" >Go to Ghibli's Films</Button>
                        </p>
                    </Jumbotron>
                </div>

                    
                </Col>

                <Col lg={true}>
                <div data-aos="fade-down">
                    <Jumbotron className="bg-warning ">
                        <Carousel className="mb-3">
                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={referral}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={sports}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="ghibli d-block w-100"
                                    src={vipper}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                        <h1>VipperHead</h1>
                        <p>
                             A single-page full-responsive website with live chat using React.js.
                             
                            
                        </p>
                        <stron style={{visibility:'hidden'}}>.</stron>
                        <p>
                            <Button variant="danger" href="https://vipper.vercel.app/" target="_blank" >Go to VipperHead</Button>
                        </p>
                    </Jumbotron>
                </div>

                    
                </Col>
                
                <Col lg={true}>
                <div data-aos="fade-left">
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
                           A website about characters and places from Star Wars using the Star Wars's SWAPI.  
                        
                           <strong> May the force be with you!</strong> 
                        
                        </p>
                        
                        <p>
                            <Button variant="danger" href="https://starwars-blog-reading-list.vercel.app/" target="_blank">Go to Star Wars</Button>
                        </p>

                    </Jumbotron>
                </div>
                    

                </Col>
            </Row>
        </Container>
    )

}
export const Contact = () => {

    
    return (
        <Container fluid data-aos="fade-in">
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



