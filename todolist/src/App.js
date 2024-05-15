import React, { Component } from "react";
import ToDoListTemplate from "./components/ToDoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

const initialTodos = new Array(500)
  .fill(0)
  .map((item, idx) => ({ id: idx, text: `일정 ${idx}`, checked: true }));

class App extends Component {
  id = 0;
  state = {
    todos: initialTodos,
  };

  handleChange = (e) => {
    this.setState({
      todo: e.target.value, // input의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { todo, todos } = this.state;
    console.log("handle create 실행");

    this.setState({
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: todo,
        checked: false,
      }),
    });
  };

  handleEnter = (e) => {
    // 눌려진 키가 enter이면 handleCreate 호출
    console.log("handle enter 실행");
    if (e.keyCode === 13) {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    console.log("handle toggle 실행");

    this.setState({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ),
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    console.log("handle remove 실행");

    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { todo, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleEnter,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <ToDoListTemplate
        form={
          <Form
            value={todo}
            myEnter={handleEnter}
            myChange={handleChange}
            myCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        ></TodoItemList>
      </ToDoListTemplate>
    );
  }
}

export default App;
