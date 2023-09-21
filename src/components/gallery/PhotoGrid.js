import React from "react";

function PhotoGrid({ children }) {
  const gridStyle = {
    display: "grid",
    gridGap: 10,
    padding: 10,
  };

  return (
    <div className="photo-grid" style={gridStyle}>
      {children}
    </div>
  );
}

export default PhotoGrid;
