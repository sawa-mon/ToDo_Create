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
    this.props.add(this.state.newTodo); //子から親へデータを渡す
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