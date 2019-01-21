import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from "./components/TodoListTemplate"
import { InputForm,TodoLists } from "./container"


class App extends Component {

  render() {
    return (
      <TodoListTemplate form={
        <InputForm />}>
          <TodoLists />
      </TodoListTemplate>
    );
  }
}

export default App;
