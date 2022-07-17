import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import "../styles/components/link-card.scss";

const LinkCard = ({ title, text, icon, color, bgColor, ltr, badge, to }) => {
  let dirProperty = "";
  let marginRight = "auto";
  let marginLeft = "50px";
  if (ltr) {
    dirProperty = "ltr";
    marginRight = "15px";
    marginLeft = "0";
  }
  
  return (
    <div className="link-card-container" style={{ backgroundColor: bgColor }}>
      <Link to={to}>
        {badge && (
          <div className="link-card-badge-container">
            <div className="link-card-badge"></div>
          </div>
        )}
        <div className="link-card-content">
          <div className="link-card-wrapper" style={{ direction: dirProperty }}>
            <div className="link-card-text-wrapper">
              <span className="link-card-title">{title}</span>
              <span className="link-card-text">{text}</span>
            </div>
            <div
              className="link-card-icon-wrapper"
              style={{ marginLeft: marginLeft, marginRight: marginRight }}>
              <div
                className="link-card-icon-container"
                style={{ backgroundColor: color }}>
                <img className="link-card-icon" src={icon} />
              </div>
            </div>
          </div>
          <div className="link-card-arrow-container">
            <div
              className="link-card-arrow-wrapper"
              style={{ backgroundColor: color }}>
              <Icon type="left" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LinkCard;
