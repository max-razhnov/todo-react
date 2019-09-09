import React from "react";
import Input from "./Input";

const TodoList = props => {
  const { todoItems, removeItem, completeItem } = props;

  return todoItems.length !== 0
    ? todoItems.map((item, id) => {
        return (
          <div key={id} className="field">
            <p className="control has-icons-left has-icons-right">
              <Input
                type="email"
                value={item.value}
                id={id}
                readonly
                done={item.done}
              />
              <span
                className="icon is-small is-left"
                style={{ background: "none", border: "none" }}
              >
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
                  }}
                ></i>
              </span>
              <span className="icon is-small is-right">
                <i
                  id={id}
                  className="delete"
                  onClick={ev => {
                    removeItem(+ev.currentTarget.id);
                  }}
                >
                  >
                </i>
              </span>
            </p>
          </div>
        );
      })
    : null;
};

export default TodoList;
