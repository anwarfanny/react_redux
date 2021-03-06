import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active} style={{ margineLeft: "4px" }}>
    {children}
  </button>
);
Link.prototypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
