import React from "react";
import { Link } from "react-router-dom";

function ServiceCard(props) {
  return (
    <div
      style={{ backgroundColor: `${props.content.bg}` }}
      className="service-card-container"
      onClick={()=>props.setService(props.content)}
    >
      {/* <Link
        to={props.content.link}
        style={{
          textDecoration: `none`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      > */}
        <img
          src={props.content.img}
          alt="Coludn't Load"
          style={{ height: `70px`, width: `70px` }}
        />
        <div className="service-card-text">
          {props.content.text === "Patients" ||
          props.content.text === "Services" ||
          props.content.text === "Hours" ? (
            <p className="service-card-text-inner">{props.content.count}</p>
          ) : (
            <p className="service-card-text-inner">{props.content.text}</p>
          )}
          {props.content.text === "Patients" ||
          props.content.text === "Services" ||
          props.content.text === "Hours" ? (
            <p
              className="service-card-text-inner"
              style={{ color: `${props.content.color}` }}
            >
              {props.content.text}
            </p>
          ) : (
            <p
              className="service-card-text-inner"
              style={{ color: `${props.content.color}` }}
            >
              Treatment
            </p>
          )}
        </div>
      {/* </Link/> */}
    </div>
  );
}

export default ServiceCard;
