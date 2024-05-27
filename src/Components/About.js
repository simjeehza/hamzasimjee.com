import React, { Component } from 'react';
import {Container, Row, Col, Image, Button} from "react-bootstrap";

class About extends Component {
    render() {
        if(this.props.data){
            var profilepic= "images/"+this.props.data.image;
            var split_bio = this.props.data.bio.split('\n').map((line) => <React.Fragment key={line}><p>{line}</p></React.Fragment>)
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="about">
                <Container>
                    <Row>
                        <Col sm={4} className="text-center">
                            <Image src={profilepic} roundedCircle />
                        </Col>
                        <Col sm={8}>
                            <h2>About Me</h2>
                            <h4>{split_bio}</h4>
                            <Row className="justify-content-center">
                                <Button href={resumeDownload} variant="dark" target="_blank" size="lg">
                                    <i className="fa fa-download"/>
                                    Download Resume
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;
