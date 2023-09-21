import React, { forwardRef } from "react";
import "./Images.css";

const Images = forwardRef(
  ({ url, index, faded, style, tags, ...props }, ref) => {
    const Styles = {
      opacity: faded ? "0.3" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };

    return <div className="photo" ref={ref} style={Styles} {...props}></div>;
  }
);

export { Images };
