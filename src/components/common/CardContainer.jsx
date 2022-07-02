import React from "react";
import "../../styles/components/common/card-container.scss";

const CardContainer = props => {
  const { children, title, titleAlign, style } = props;
  return (
    <div className="card-container" style={style}>
      <h5 style={{ textAlign: titleAlign }}>{title}</h5>
      {children}
    </div>
  );
};

export default CardContainer;
