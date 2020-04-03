import React from "react";


function LinkComponent({ children }) {
  return (
    <div
      style={{
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "14px",
        margin: "0",
        whiteSpace: "nowrap"
      }}
    >
      {children}
    </div>
  );
}

export default LinkComponent;
