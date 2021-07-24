import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`card-btn ${props.linkType}`} 
      // linktype={props["data-value"]} 
    >
      {props.name}
    </button>
  );
}

export default CardBtn;
