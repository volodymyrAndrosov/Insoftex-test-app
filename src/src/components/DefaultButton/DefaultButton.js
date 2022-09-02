import React from "react";

const DefaultButton = props => {
  const { text, onClick } = props;

  return (
    <button
      style={{
        padding: "10px",
        border: "solid 1px gray",
        background: "papayawhip",
      }}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default DefaultButton;
