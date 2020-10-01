import React, { Component, useContext } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";


import "./TitlesSection.css";





class TitlesSection extends Component {
  constructor(props){
    super(props);
    this.state={
      defaultColorClass: 'first'
    }
  }
  state = {
    color: "white",
  };


  changeBackColor(){
    if (this.state.defaultColorClass === 'first'){
      this.setState({defaultColorClass:"first-zard"})
    }
    else if (this.state.defaultColorClass === 'first-zard'){
      this.setState({defaultColorClass:"first"})
    }
  }


  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white",
    });
  };
  render() {
    return (
      <div>
        <Element name="test1" className="element"></Element>
        <Fullpage className={this.state.defaultColorClass}>
          <h1
            className="title"
            style={{
              color: this.state.color,
            }}
            onMouseOver={() => {
              this.changeColor();
            }}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="test2"
          spy={true}
          smooth={true}
          // offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
      </div>
    );
  }
}
export default TitlesSection;
