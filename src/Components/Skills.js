import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'

class Skills extends Component {
    render() {
        if (this.props.data) {
            var skillList = this.props.data.skills;
            var photos = [];
            while(skillList.length > 0){
                photos.push(skillList.splice(0,5))
            }
            var skills =
                    photos.map((cols) => (
                        <React.Fragment key={cols}>
                            <Row>
                                {cols.map((img) => (
                                    <React.Fragment key={img}>
                                        <Col className="text-center">
                                            <Image src={"images/skills/"+img} rounded />
                                        </Col>
                                    </React.Fragment>
                                ))}
                            </Row>
                        </React.Fragment>
                    ))
        }

        return (
            <section id="skills">
                <Container>
                    <Row>
                        <Col sm={2} className="text-center">
                            <h1><span>Skills</span></h1>
                        </Col>
                        <Col sm={10}>
                            <Container>
                                {skills}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Skills;
