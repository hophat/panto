import styles from "./base-button.module.css";
import { Button } from "./button";

import React, { useState } from "react";

export default function ButtonMain({ children, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  const bntStyle = {
    padding:".75rem 2rem",
    transition: "transform 200ms",
    fontSize:"1.5em",
    transform: isHovered
      ? `translate3d(1px, 1px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
      : `translate3d(-3px, -3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
  };
  const bogStyle = {
    top: "5px",
    position: "absolute",
    left: "5px",
    background: "black",
    width: "100%",
    height: "100%",
    zIndex: -1,
    transition: "transform 200ms",
    transform: isHovered
      ? `translate3d(-3px, -3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
      : `translate3d(1px, 1px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
  };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Button
        style={bntStyle}
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Button>
      <div style={bogStyle} className=""></div>
    </div>
  );
}



