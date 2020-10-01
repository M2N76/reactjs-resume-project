import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Element name="test2" className="element"></Element>
        <div>

        
<Fullpage className="second">
<h3>{data.section[0].title}</h3>
<div>
  {data.section[0].items.map((p) => {
    return <p>{p.content}</p>;
  })}
</div>

</Fullpage>

<Link
activeClass="active"
to="test3"
spy={true}
smooth={true}
offset={50}
duration={500}
onSetActive={this.handleSetActive}
>
<DownIcon
icon={data.icons.down}

/>
</Link>

</div>

      </div>
     
    );
  }
}
export default AboutSection;
