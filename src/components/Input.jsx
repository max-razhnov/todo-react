import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const {
    type,
    id,
    placeholder,
    value,
    done,
    readOnly,
    style,
    onmouseover,
    onmouseout
  } = props;

  return (
    <input
      id={id}
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      style={{
        textDecoration: done ? "line-through" : "none",
        color: style ? style : ""
      }}
      maxLength={80}
      readOnly={readOnly}
      onMouseOver={onmouseover}
      onMouseOut={onmouseout}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.string,
  done: PropTypes.bool,
  readOnly: PropTypes.bool,
  color: PropTypes.string,
  onmouseover: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  onmouseout: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
};

Input.defaultProps = {
  type: "text",
  placeholder: "What you want to do?",
  readOnly: false,
  onmouseover: null,
  onmouseout: null
};

export default Input;
