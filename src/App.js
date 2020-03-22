import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import todoItems from "./components/constants";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todoItems };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.clearAnimation = this.clearAnimation.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }

  setAnimation(ev) {
    ev.currentTarget.style.opacity = "0.8";
    ev.currentTarget.style.transition = "0.5s ease-out";
  }

  clearAnimation(ev) {
    ev.currentTarget.style.opacity = "1";
    ev.currentTarget.style.transition = "0.5s ease-out";
  }

  addItem() {
    const value = document.getElementById("start-input").value;
    if (value.trim()) {
      let { todoItems } = this.state;
      todoItems.push({ id: todoItems.length, value: value, done: false });
      document.getElementById("start-input").value = "";
      this.setState({
        todoItems: [...todoItems]
      });
    }
  }

  removeItem(index) {
    let { todoItems } = this.state;
    let newtodoItems = [];
    for (let i = 0; i < todoItems.length; i++) {
      if (i !== index) {
        newtodoItems.push(todoItems[i]);
      }
    }
    this.setState({
      todoItems: [...newtodoItems]
    });
  }

  completeItem(index) {
    let { todoItems } = this.state;
    let arr = [];
    todoItems.forEach((item, id) => {
      if (id === index) {
        item.done = !item.done;
      }
      if (item.done) {
        arr.push(item);
      } else {
        arr.unshift(item);
      }
    });
    this.setState({
      todoItems: [...arr]
    });
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title is-1" style={{ color: "white" }}>
            To do app
          </h1>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <Input id="start-input" readOnly={false} />
              <button
                className={"button is-primary is-smal"}
                onClick={this.addItem}>
                add item
              </button>
            </div>
          </div>
          <TodoList
            removeItem={this.removeItem}
            todoItems={[...todoItems]}
            completeItem={this.completeItem}
            onmouseover={this.setAnimation}
            onmouseout={this.clearAnimation}
          />
        </header>
      </div>
    );
  }
}

export default App;
