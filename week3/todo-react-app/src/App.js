import './App.css';
import TodoCount from "./todo-count";
import TodoList from "./todo-list";
import React from "react";

class App extends React.Component {
  todos = ["Complete exercises", "Watch videos", "Take quiz"];
  constructor(props) {
    super(props);
    this.state = { todos: this.todos };
  }

  render() {
    return (
      <div className="todo-display">
        <TodoCount todos={this.state.todos} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
