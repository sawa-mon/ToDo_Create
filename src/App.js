import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[], //「親から子」へ渡すデータ
    };
  }

  addTodo(newTodo) { //todosの渡すデータはココから↓へ
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({todos: todos});
  }

  deleteTodo(i) {
    const todos = this.state.todos;
    todos.splice(i,1);
    this.setState({todos: todos});
  } //ココまで↑子から受け取ったデータを"子"へ

  render() {
    return (
      <div>
        <TodoForm
        add = {this.addTodo.bind(this)} //子から受け取ったデータ
        > 
        </TodoForm>
        <TodoList
        todos = {this.state.todos} //親から子へ渡すデータ
        del = {this.deleteTodo.bind(this)} //delete要求のあった子から受け取ったデータ
        > 
        </TodoList> 
      </div>
    );
  }
}

export default App;
