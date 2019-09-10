const todoItems = [
  {
    id: 0,
    value: "Finish this task",
    done: false
  },
  {
    id: 1,
    value: "Have a rest",
    done: true
  },
  {
    id: 2,
    value: "Go to sleep",
    done: true
  }
];

const setAnimation = ev => {
  ev.currentTarget.style.opacity = "0.8";
  ev.currentTarget.style.transition = "0.5s ease-out";
};

const clearAnimation = ev => {
  ev.currentTarget.style.opacity = "1";
  ev.currentTarget.style.transition = "0.5s ease-out";
};

export { todoItems, setAnimation, clearAnimation };
