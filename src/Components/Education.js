import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";

class Education extends Component {
    render() {
        if (this.props.data) {
            var education = this.props.data.education.map(function (education) {
                return <React.Fragment key={education.school}><div key={education.school} className="school"><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em
                        className="date">{education.graduated}</em></p>
                    <p>{education.description}</p></div></React.Fragment>
            })
        }
        return (
            <section id="education">
                <Container>
                    <Row>
                        <Col sm={2} className="text-center">
                            <h1><span>Education</span></h1>
                        </Col>
                        <Col sm={10}>
                            {education}
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Education;