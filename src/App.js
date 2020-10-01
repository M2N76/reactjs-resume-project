import React, { Component } from "react";

import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Header from "./components/Header";
import SnowStorm from "react-snowstorm";

 

import "./App.css";



class App extends Component {
  constructor(props){
    super(props);
    this.state={}
    this.test = this.test.bind(this)
  };
 
  test(){
    
    this.triggerChildFunction()
  };



salam(){
  
}

triggerChildFunction(){
  this.refs.child.changeBackColor();
}
  render(){
    return(
        <div className="App">
              <div>
                
              </div>
              <Header test={this.test} />
              
              <TitlesSection ref="child" test={this.salam}/>
              <AboutSection />
              <SkillSection />
              <SnowStorm />
          </div>
    );
  }
}

export default App;
