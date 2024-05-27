import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";
import {Col, Container, Row, Button, Card} from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Experience extends Component {
    render() {
        if (this.props.data) {
            var work = this.props.data.work.map(function (work) {
                var work_title = work.title;
                var work_years = work.years;
                var work_img = "images/experience/" + work.img;
                var work_description = work.description.split('\n').map((line) => <React.Fragment key={line}>{line}<br/><br/></React.Fragment>);
                var work_link = work.url;
                let linkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-icon"/>;
                var flippy;

                return (
                    <React.Fragment key={work.title}>
                        <Card className="text-center">
                            <MobileView className="cards">
                                <Flippy
                                    flipOnHover={false}
                                    flipOnClick={false}
                                    flipDirection="horizontal"
                                    ref={(r) => flippy = r}
                                >
                                    <FrontSide>
                                        <a target="_blank" rel="noopener noreferrer" href={work_link}>
                                            <Card.Img src={work_img}/>
                                            <Card.Body>
                                                <span>
                                                    <Card.Title>
                                                        <h4>{work_title}{linkIcon}</h4>
                                                    </Card.Title>
                                                </span>
                                            </Card.Body>
                                        </a>
                                        <Button size="lg" onClick={() => flippy.toggle()}><FontAwesomeIcon icon={faBars}/></Button>
                                    </FrontSide>
                                    <BackSide>
                                        <Card.Body>
                                            <Card.Title>
                                                <h5>{work_title}</h5>
                                                <h6>{work_years}</h6>
                                            </Card.Title>
                                            <hr/>
                                            <Card.Text>
                                                {work_description}
                                            </Card.Text>
                                            <Button size="lg" onClick={() => flippy.toggle()}><FontAwesomeIcon icon={faBars}/></Button>
                                        </Card.Body>
                                    </BackSide>
                                </Flippy>
                            </MobileView>
                            <BrowserView className="cards">
                                <a target="_blank" rel="noopener noreferrer" href={work_link}>
                                    <Flippy
                                        flipOnHover={true}
                                        flipOnClick={false}
                                        flipDirection="horizontal"
                                    >
                                        <FrontSide>
                                            <Card.Img src={work_img}/>
                                            <span>
                                                <Card.Title>
                                                    <h3>{work_title}{linkIcon}</h3>
                                                </Card.Title>
                                            </span>
                                        </FrontSide>
                                        <BackSide>
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>{work_title}</h4>
                                                    <h5>{work_years}</h5>
                                                </Card.Title>
                                                <hr/>
                                                <span>
                                                    <Card.Text>
                                                        {work_description}
                                                    </Card.Text>
                                                </span>
                                            </Card.Body>
                                        </BackSide>
                                    </Flippy>
                                </a>
                            </BrowserView>
                        </Card>
                    </React.Fragment>
                )
            })
        }

        return (
            <section id="experience">
                <Container>
                    <Row>
                        <Col sm={2} className="text-center">
                            <h1><span>Experience</span></h1>
                        </Col>
                        <Col sm={10}>
                            <Container className="cards-container">
                                {work}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Experience;