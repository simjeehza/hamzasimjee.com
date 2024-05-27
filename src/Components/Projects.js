import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserView, MobileView } from "react-device-detect";
import {Col, Container, Row, Button, Card} from "react-bootstrap";

class Projects extends Component {
    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projects_title = projects.title;
                var projects_years = projects.years;
                var projects_img = "images/projects/" + projects.img;
                var projects_description = projects.description.split('\n').map((line) => <React.Fragment key={line}>{line}<br/><br/></React.Fragment>);
                var projects_link = projects.link;
                let linkIcon = <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-icon"/>;
                if(projects_link === ""){
                    linkIcon = "";
                    projects_link = null;
                }
                var flippy;

                return (
                    <React.Fragment key={projects.title}>
                        <Card className="text-center">
                            <MobileView className="cards">
                                <Flippy
                                    flipOnHover={false}
                                    flipOnClick={false}
                                    flipDirection="horizontal"
                                    ref={(r) => flippy = r}
                                >
                                    <FrontSide>
                                        <a target="_blank" rel="noopener noreferrer" href={projects_link}>
                                            <Card.Img src={projects_img}/>
                                            <Card.Body>
                                                <span>
                                                    <Card.Title>
                                                        <h4>{projects_title}{linkIcon}</h4>
                                                    </Card.Title>
                                                </span>
                                            </Card.Body>
                                        </a>
                                        <Button size="lg" onClick={() => flippy.toggle()}><FontAwesomeIcon icon={faBars}/></Button>
                                    </FrontSide>
                                    <BackSide>
                                        <Card.Body>
                                            <Card.Title>
                                                <h5>{projects_title}</h5>
                                                <h6>{projects_years}</h6>
                                            </Card.Title>
                                            <hr/>
                                            <Card.Text>
                                                {projects_description}
                                            </Card.Text>
                                            <Button size="lg" onClick={() => flippy.toggle()}><FontAwesomeIcon icon={faBars}/></Button>
                                        </Card.Body>
                                    </BackSide>
                                </Flippy>
                            </MobileView>
                            <BrowserView className="cards">
                                <a target="_blank" rel="noopener noreferrer" href={projects_link}>
                                    <Flippy
                                        flipOnHover={true}
                                        flipOnClick={false}
                                        flipDirection="horizontal"
                                    >
                                        <FrontSide>
                                            <Card.Img src={projects_img}/>
                                            <span>
                                                <Card.Title>
                                                    <h3>{projects_title}{linkIcon}</h3>
                                                </Card.Title>
                                            </span>
                                        </FrontSide>
                                        <BackSide>
                                            <Card.Body>
                                                <Card.Title>
                                                    <h4>{projects_title}</h4>
                                                    <h5>{projects_years}</h5>
                                                </Card.Title>
                                                <hr/>
                                                <span>
                                                    <Card.Text>
                                                        {projects_description}
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
            <section id="projects">
                <Container>
                    <Row>
                        <Col sm={2} className="text-center">
                            <h1><span>Projects</span></h1>
                        </Col>
                        <Col sm={10}>
                            <Container className="cards-container">
                                {projects}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Projects;