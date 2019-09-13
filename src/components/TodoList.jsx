import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";

const TodoList = props => {
  const {
    todoItems,
    removeItem,
    completeItem,
    onmouseover,
    onmouseout
  } = props;

  return todoItems.length !== 0
    ? todoItems.map((item, id) => {
        return (
          <div key={id} className="field">
            <p className="control has-icons-left has-icons-right">
              <Input
                value={item.value}
                id={id}
                readOnly
                done={item.done}
                style={item.done ? "red" : "green"}
                onmouseover={onmouseover}
                onmouseout={onmouseout}
              />
              <span
                className="icon is-small is-left"
                style={{ background: "none", border: "none" }}>
                <i
                  id={id}
                  className={
                    item.done ? "fas fa-minus-circle" : "fas fa-check-circle"
                  }
                  style={{
                    color: item.done ? "red" : "green",
                    pointerEvents: "auto"
                  }}
                  onClick={ev => {
                    completeItem(+ev.currentTarget.id);
                  }}></i>
              </span>
              <span className="icon is-small is-right">
                <i
                  id={id}
                  className="delete"
                  onClick={ev => {
                    removeItem(+ev.currentTarget.id);
                  }}>
                  >
                </i>
              </span>
            </p>
          </div>
        );
      })
    : null;
};

TodoList.defaultProps = {
  todoItems: []
};

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  completeItem: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default TodoList;
