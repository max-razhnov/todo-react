// @flow
import React from "react";

type Props = {
  type?: string,
  id?: string | number,
  placeholder?: string,
  value?: string,
  style?: string,
  done?: String,
  readOnly: boolean,
  color?: string,
  onmouseover?: Funtion | undefined,
  onmouseout?: Function | undefined
};

const Input = (props: Props) => {
  const {
    type = "text",
    id,
    placeholder = "What you want to do?",
    value,
    done,
    readOnly = false,
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

export default Input;
