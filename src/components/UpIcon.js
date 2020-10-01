import React,{Component} from "react";

const UpIcon = (props) => {
    return(
        <div
        onClick={props.onClick}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-30px",
          transform: "translateY(-5px)",
          paddingRight:"130px",
          paddingBottom:0,
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
export default UpIcon;