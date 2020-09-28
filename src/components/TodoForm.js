import React, { Component } from 'react';

class TodoFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo:'' //(子から)入力されたToDoの内容を親へデータを渡す
    };
  }

  handleChange(e) {
    this.setState({newTodo: e.target.value});
  }

  addTodo() {
    if(this.state.newTodo === '')return;
    const todos = JSON.parse(localStorage.getItem('todos')) || []; //Appコンポーネントで行っていたtodosプロパティの管理をTodoListコンポーネントで行う
    todos.push(this.state.newTodo);
    localStorage.setItem('todos',JSON.stringify(todos)); //ローカルストレージに直接アクセスしてTodoリストのデータロード、削除を行う
    this.setState({newTodo:''});
  }

  render() {
    return(
      <div>
        <h2>ToDoリスト</h2>
        <input
        value={this.state.newTodo}
        onChange={this.handleChange.bind(this)}
        placeholder="ここにToDoを書き込む..."
        />
        <button
        onClick={this.addTodo.bind(this)}>追加</button>
      </div>
    );
  }
}

export default TodoFrom;