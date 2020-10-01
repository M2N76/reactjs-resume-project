import React, { Component } from "react";
import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
          <img className="cardimg" src={skill.content.img} />
          <h4 className="cardtext">{skill.content.title}</h4>
      
      </div>
    );
  }
}
export default SkillCard;
