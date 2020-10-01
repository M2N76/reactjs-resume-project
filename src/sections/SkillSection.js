import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import UpIcon from "../components/UpIcon";
import { Link, Element } from "react-scroll";

import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="third">
          <h3>{data.section[1].title}</h3>
          <div className="cards-wrapper">
            {data.section[1].items.map((eachSkill) => {
              return <SkillCard skill={eachSkill} />;
            })}
          </div>
        </Fullpage>

        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <UpIcon
            icon={data.icons.up}
         
          />
        </Link>
        <Element name="test3" className="element"></Element>
      </div>
    );
  }
}
export default SkillSection;
