import React,{Component} from "react";

const DownIcon = (props) => {
    return(
        <div
        onClick={props.onClick}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-75px",
          transform: "translateY(-75px)",
          paddingRight:"130px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            maxWidth: "30px",
          }}
        >
          <img src={props.icon} />
        </div>
      </div>
    )
}
export default DownIcon;