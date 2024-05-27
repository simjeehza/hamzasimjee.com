import React, { Component } from 'react';
import {Nav, Button, Card} from "react-bootstrap";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import $ from 'jquery'

class Header extends Component {
    toggleNavCard(){
        $(document).ready(function(){
            $('#nav-card').slideToggle('show');
            $('.mobile-nav').slideToggle('show');
        });
    }

    render() {

        if(this.props.data){
            var name = this.props.data.name;
            var occupation= this.props.data.occupation;
            var networks= this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
            })
        }

        return (
            <header id="home">
                <nav id="nav-wrap" className="desktop-nav">
                    <Nav id="nav" as="ul" className="justify-content-center">
                        <Nav.Item className="current" as="li">
                            <Nav.Link className="smoothscroll" href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="smoothscroll" href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="smoothscroll" href="#education">Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="smoothscroll" href="#experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="smoothscroll" href="#projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="smoothscroll" href="#skills">Skills</Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item as="li">
                            <Nav.Link className="smoothscroll" href="#contact">Contact</Nav.Link>
                        </Nav.Item>*/}
                    </Nav>
                </nav>

                <Button id="nav-button" size="lg" onClick={this.toggleNavCard}><FontAwesomeIcon icon={faBars}/></Button>
                <Card id="nav-card">
                    <nav id="nav-wrap" className="mobile-nav">
                        <Nav id="nav" as="ul" className="justify-content-center">
                            <Nav.Item className="current" as="li">
                                <Nav.Link className="smoothscroll" onClick={this.toggleNavCard} href="#home">Home</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav id="nav" as="ul" className="justify-content-center">
                            <Nav.Item as="li">
                                <Nav.Link className="smoothscroll" onClick={this.toggleNavCard} href="#about">About</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav id="nav" as="ul" className="justify-content-center">
                            <Nav.Item as="li">
                                <Nav.Link className="smoothscroll" onClick={this.toggleNavCard} href="#education">Education</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav id="nav" as="ul" className="justify-content-center">
                            <Nav.Item as="li">
                                <Nav.Link className="smoothscroll" onClick={this.toggleNavCard} href="#experience">Experience</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav id="nav" as="ul" className="justify-content-center">
                            <Nav.Item as="li">
                                <Nav.Link className="smoothscroll" onClick={this.toggleNavCard} href="#projects">Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav id="nav" as="ul" className="justify-content-center">
                            <Nav.Item as="li">
                                <Nav.Link className="smoothscroll" onClick={this.toggleNavCard} href="#skills">Skills</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/*<Nav id="nav" as="ul" className="justify-content-center">
                            <Nav.Item as="li">
                                <Nav.Link className="smoothscroll" onClick={this.toggleNavCard} href="#contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>*/}
                    </nav>
                </Card>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{name}</h1>
                        <h3>{occupation}</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;
