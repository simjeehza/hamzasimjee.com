import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import ReactGA from 'react-ga';
/*import Contact from './Components/Contact';*/

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        foo: 'bar',
        resumeData: {}
    };
  }

  getResumeData(){
      return fetch('https://raw.githubusercontent.com/simjeehza/hamzasimjee.com/main/public/data/portfolioData.json')
          .then((response) => response.json())
          .then((data) => {
              this.setState({resumeData: data});
          })
          .catch((error) => {
              console.error(error);
              alert(error);
          });
  }

  componentDidMount() {
    ReactGA.initialize('UA-118897235-3');
    ReactGA.pageview('/');
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Education data={this.state.resumeData.experience}/>
        <Experience data={this.state.resumeData.experience}/>
        <Projects data={this.state.resumeData.experience}/>
        <Skills data={this.state.resumeData.experience}/>
        {/*<Contact data={this.state.resumeData.main}/>*/}
      </div>
    );
  }
}

export default App;
